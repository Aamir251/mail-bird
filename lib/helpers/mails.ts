
import { google } from "googleapis";
import { OAuth2Client } from "google-auth-library";
import { getGoogleClient } from "../google-client";

export const getMails = async () =>
{
  
  const client = await getGoogleClient()

  await listLabels(client)


}


async function listLabels(authClient : OAuth2Client) {
  try {
    const gmail = google.gmail({version: 'v1', auth: authClient});
    const res = await gmail.users.labels.list({
      userId: 'me',
    });


    const res2 =  await gmail.users.messages.list({
      userId : "me"
    });

    const labels = res.data.labels;
    if (!labels || labels.length === 0) {
      console.log('No labels found.');
      return;
    }
    
    labels.forEach((label) => {
      console.log(`- ${label.name}`);
    });
  } catch (error) {
    console.error('Error listing labels:', error);
  }
}
