export { default } from "next-auth/middleware";

export const config ={
//  '*'zero or more
//  '+' one or more
//  "?'zero or one
matcher: ['/dash/:id*']}
//? theres' a shorter form to implenet middle ware⬆️
// import middleware from "next-auth/middleware";

// export default middleware;

//? for explame purpose
// export function middleware( request :NextRequest){
//     return NextResponse.redirect(new URL('/new-page', request.url))
// }
// export const config ={
//  '*'zero or more parameters in url
//  '+' one or more parameters in url
//  "?'zero or one parameters in url
// matcher: ['/users/:id']}