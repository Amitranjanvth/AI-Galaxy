import proxy from 'express-http-proxy';

export const proxyWithHeaders = (serviceUrl) => {
  return proxy(serviceUrl, {
    proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
        if(srcReq.user){
            proxyReqOpts.headers['x-user-id'] = srcReq.user.userId;
        }
      // Add any necessary headers to the proxy request
      return proxyReqOpts;
    }
  });
};