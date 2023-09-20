import { withAuth } from "next-auth/middleware";

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth({
  callbacks: {
    

    authorized({ req, token }) {
      
      const path = req.nextUrl.pathname;

      const isAdmin = token?.role === "ADMIN"

      const isPublicPath = path === "/login";
      const protectedPath = path.startsWith("/dashboard");

      if (isPublicPath) {
        return true;
      }
    
      if (protectedPath && isAdmin) {
       
        return true;
      }
      return false
      //checking path and authorization
      // if ( req.nextUrl.pathname.startsWith("/dashboard")) {
      //   return token?.role === "ADMIN"
      // }
      // return !!token
    },
   
  },
})

export const config = { matcher: ["/dashboard/:path*","/login"] }




