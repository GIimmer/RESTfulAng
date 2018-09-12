const xp = require('express'),
    bp = require('body-parser'),
    // path = require('path'),
    router = require('./server/routes.js');



const app = router(xp());
app.use(xp.static( __dirname + '/public/dist/public' ));
app.use(bp.urlencoded({extended: true}));
app.set('trust proxy', 1);

router(app);

app.listen(8000, function(){
    console.log("listening on port 8000", (errs)=>console.log(errs?errs:"guggi"));
})