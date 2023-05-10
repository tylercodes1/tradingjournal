This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

-  [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-  [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Google Analytics

Google analytics offers the ability to track user events and interactions on your website.

Currently we have implemented the base scripts in `_app.js`.

<details>
<summary>Code in `_app.js`</summary>

```js
   <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      strategy="afterInteractive"
   />
   <Script id="google-analytics" strategy="afterInteractive">
      {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', '${gtag.GA_TRACKING_ID}'); v
   `}
```

</Script>
</details>

### Privacy Policy and Cookies

I'm not quite sure how to comply with local and international data privacy laws. All I know is that non-functional data collected through Google Analytics must be disclosed. Spike on this later.

### [Custom Events][customEvents]

Some of the beauty of google analytics is that you can create your own events that give you a variety of insight. What data you choose to collect on your website is up to you.

### Use Cases

1. Page views (page_view object)
2. Events (events object)
3. Screen Views (screen_view object for SPAs or mobile)

#### Low level measures

1. Counting Views
2. Recording Clicks
3. Recording submissions
4. Custom Actions or events:

```js
gtag('event', <action>, {
  'event_category': <category>,
  'event_label': <label>,
  'value': <value>
});
```

#### Abstract measures

These can be custom events or funnels

1. Login
   a. Success
   b. Failure
2. Rage Clicking
3. Engaged Customer (Viewed a few pages)

### Alternatives

tbd

## Database Options

| Provider                    | Free Tier       | Storage Limit | Max Connections | Max Database Instances |
| --------------------------- | --------------- | ------------- | --------------- | ---------------------- |
| Amazon Web Services (AWS)   | AWS Free Tier   | 30 GB         | N/A             | N/A                    |
| Google Cloud Platform (GCP) | Always Free     | 5 GB          | 20              | 1                      |
| Microsoft Azure             | Azure Free Tier | 250 GB        | 128             | 1                      |
| Oracle Cloud                | Free Tier       | 20 GB         | N/A             | 2                      |
| MongoDB Atlas               | Free Cluster    | 512 MB        | N/A             | 1                      |
| Firebase                    | Spark Plan      | 1 GB          | 100             | 1                      |
| Heroku                      | Hobby Dev       | 10k Rows      | N/A             | 10                     |
| IBM Cloud                   | Lite Plan       | 1 GB          | N/A             | 1                      |
| Alibaba Cloud               | Free Trial      | 40 GB         | 5               | 2                      |
| ScaleGrid                   | Free Plan       | 10 MB         | N/A             | 1                      |

_Created by ChatGPT_

### [Google Cloud Platform][googleCloudPlatform]

Their cloud storage free-tier options has the follow rate limits:

-  5 GB-months of regional storage (US regions only) per month
-  5,000 Class A Operations per month
-  50,000 Class B Operations per month
-  100 GB network egress from North America to all region destinations (excluding China and Australia) per month

To start, we will implement GCP for page view counts.

<!-- LINKS -->

[customEvents]: https://developers.google.com/analytics/devguides/collection/gtagjs/events
[googleCloudPlatform]: https://cloud.google.com/free/docs/free-cloud-features#storage
