/**
 * Created by Administrator on 2017/2/15 0015.
 */

/*hash 路由*/
function Router(){
    /*默认值*/
    _this = this;
    _this.routes = {};
    _this.curUrl = '/';
    _this.routes[_this.curUrl] = function(){};

    _this.route = function(path, callback){
        _this.routes[path] = callback || function(){};
    };

    _this.load = function(e){
        _this.curUrl = location.hash.slice(1) || '/';
        _this.routes[_this.curUrl]();
    };

    _this.init = function(){
        window.addEventListener('load', _this.load.bind(_this), false);
        window.addEventListener('hashchange', _this.load.bind(_this), false);
    }
}



var Router = new Router();
Router.init();
var content = document.querySelector('.content');

Router.route('/', function() {
    content.innerHTML = '我是首页';
});
Router.route('/page1', function() {
    content.innerHTML = '我是页面1';
});
Router.route('/page2', function() {
    content.innerHTML = '我是页面2';
});
Router.route('/page3', function() {
    content.innerHTML = '我是页面3';
});