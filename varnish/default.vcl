vcl 4.0;

backend default {
    .host = "web"; // set to application host
    .port = "4000";
}

sub vcl_recv {
    unset req.http.Cookie;
    if (req.method == "PRI") {
      /* We do not support SPDY or HTTP/2.0 */
      return (synth(405));
    }

    if (req.method != "GET" && req.method != "HEAD") {
        /* We only deal with GET and HEAD by default */
        return (pass);
    }
    if (req.http.Authorization || req.http.Cookie) {
        /* Not cacheable by default */
        return (pass);
    }
    set req.http.host = "www2.systematix.co.uk";
    return (hash);
}

sub vcl_backend_fetch {
    return (fetch);
}

sub vcl_deliver {
    return (deliver);
}


sub vcl_backend_response {
    set beresp.ttl = 1w;
    set beresp.grace = 24h;
    if (beresp.ttl <= 0s ||
      beresp.http.Set-Cookie ||
      beresp.http.Surrogate-control ~ "no-store" ||
      (!beresp.http.Surrogate-Control &&
        beresp.http.Cache-Control ~ "no-cache|no-store|private") ||
      beresp.http.Vary == "*") {
        /*
        * Mark as "Hit-For-Pass" for the next 2 minutes
        */
        set beresp.ttl = 120s;
        set beresp.uncacheable = true;
    }
    return (deliver);
}

