
function FindProxyForURL(url, host) {

if(shExpMatch(host, "cman.jp")){
    return "DIRECT";
}
     

    /* Default Traffic Forwarding. Forwarding to Zen */
    return "PROXY tyo4.sme.zscaler.net:80; PROXY osa1.sme.zscaler.net:80; DIRECT";
    
    
}
