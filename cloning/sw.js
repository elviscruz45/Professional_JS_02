const VERSION="v1"

self.addEventListener("install",event=>{
    event.waitUntil(precache())
})

self.addEventListener("fetch",event=>{
    const request=event.request;
    //get
    if ( request.method!=="GET"){
        return
    }
    //buscar en cache
    event.respondWith(cachedResponse(request))

    //actualizar el cache
    event.waitUntil(updateCache(request))

})


async function precache(){
const cache= await caches.open("VERSION")
return cache.addAll([
    "/cloning/",
    "/cloning/index.html",
    "/cloning/assets/index.js",
    "/cloning/assets/MediaPlayer.js",
    "/cloning/assets/plugins/AutoPlay.js",
    "/cloning/assets/plugins/AutoPause.js",
    "/cloning/assets/index.css",
    "/cloning/assets/sintel-short.mp4",
])
}

async function cachedResponse(request){
    const cache=await caches.open(VERSION)
    const response=await cache.match(request)
    return response || fetch(request)
    
}


async function updateCache(request){
    const cache=await caches.open(VERSION)
    const response=await fetch(request)
    return response.status === 200? cache.put(request, response) 
    : new Promise((resolve, reject) => resolve(':D'));    
}    


