import { join } from 'path';
import fs from 'fs';
import { PostHog } from 'posthog-node'
import siteMetadata from '@/data/siteMetadata'

/**
 * pixel tracker for Aperture
 * --
 * Usage:
 * <img src="https://nathanlu.ca/api/a?e=hi.com" />
 */
export default async (req, res) => {
  const { e } = req.query;

  const client = new PostHog(
    siteMetadata.analytics.posthogAnalyticsId,
    { host: 'https://app.posthog.com' }
  )

  client.capture({
    distinctId: e,
    event: 'App opened',
    properties: {
      email: e
    }
  });

  await client.shutdownAsync()

  // Construct the path to the image within the "public" directory.
  const imagePath = join(process.cwd(), 'public/static/images/p.gif');

  // Check if the image file exists.
  if (fs.existsSync(imagePath)) {
    // Read the image file and send it as a response.
    const image = fs.readFileSync(imagePath);
    res.writeHead(200, { 'Content-Type': 'image/jpeg' }); // Adjust the content type based on your image format.
    res.end(image, 'binary');
  } else {
    res.status(404).end('Image not found');
  }
};
