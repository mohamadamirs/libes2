import { google } from 'googleapis';

const auth = new google.auth.JWT({
  email: import.meta.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: import.meta.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
});

const drive = google.drive({ version: 'v3', auth });

// Ambil Folder (Untuk Level 1, 2, 3)
export async function getFolders(parentId: string) {
  const res = await drive.files.list({
    q: `'${parentId}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false`,
    fields: 'files(id, name)',
    orderBy: 'name desc',
  });
  return res.data.files || [];
}

// Tambahkan parameter limit dengan nilai default (misal 10)
export async function getMediaFiles(
  folderId: string,
  pageToken?: string | null,
  limit: number = 10,
) {
  try {
    const response = await drive.files.list({
      q: `'${folderId}' in parents and trashed = false`,
      fields: 'nextPageToken, files(id, name, mimeType, webContentLink)',
      pageSize: limit, // Gunakan parameter limit di sini
      pageToken: pageToken || undefined,
    });

    return {
      files: response.data.files || [],
      nextPageToken: response.data.nextPageToken || null,
    };
  } catch (error) {
    throw error;
  }
}
