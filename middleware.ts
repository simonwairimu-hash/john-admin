// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/api/:storeId/categories',
  '/api/:storeId/billboards',
]);

export default clerkMiddleware((auth, req) => {
  if (isPublicRoute(req)) {
    return; // ✅ Skip auth for public routes
  }

  // ✅ This enforces auth implicitly
  auth(); // No need to call .protect()
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
