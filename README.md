# Next.js 15 Runtime Error: process is not defined

This repository demonstrates a common runtime error in Next.js 15 applications when accessing environment variables within client-side components.  The error arises because `process` is not available in the browser environment.

## Problem

The `about.js` file attempts to access `process.env.MY_VARIABLE`.  This works fine on the server, but in the browser, it throws a `ReferenceError: process is not defined`.

## Solution

The solution involves moving environment variable access to the server-side. This example uses `getServerSideProps` to fetch data from the server and pass it down as props to the client-side component.  Alternative solutions might use API routes.