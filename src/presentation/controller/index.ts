/**
 * TODO/OPTIMIZE: To improve software architecture,
 * it would be good to convert (or adapt) express.Request and express.Response objects
 * into @types/node Request/Response objects.
 * that would allow controller to never be changed even if we want to
 * change the framework (express.js)
 */

export * from './auth-controller'
