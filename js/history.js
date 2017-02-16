/**
 * Created by Administrator on 2017/2/16 0016.
 */

/**
 * history
 * 需要服务器端支持history api
 * */
function Router(){
    /*默认值*/
    _this = this;
    _this.routes = {};
    _this.curUrl = '/';
    _this.routes[_this.curUrl] = function(){};

    _this.route = function(path, callback){
        _this.routes[path] = callback || function(){};
    };

    _this.load = function(href){
        _this.curUrl = href || '/';
        _this.routes[_this.curUrl]();
    };

    _this.init = function(){
        Array.prototype.slice.call(document.querySelectorAll('a')).map(function (item, i) {
            if(item.getAttribute('history') !== null){
                item.addEventListener('click', function (e) {
                    e.preventDefault();
                    var href = e.target.getAttribute('href');
                    history.pushState({href: href}, null, href);
                    _this.load(href);
                }, false);
            }
        });
    }

    window.addEventListener('load', _this.load.bind(_this, '/'), false);
    window.addEventListener("popstate", function(e) {
        console.log(e);
        if(e.state !== null){
            _this.load(e.state.href);
        }
    });

}

var Router = new Router();
Router.init();

var content = document.querySelector('.content');

Router.route('history.html', function() {
    content.innerHTML = '我是首页';
});
Router.route('page1.html', function() {
    content.innerHTML = '我是页面1';
});
Router.route('page2.html', function() {
    content.innerHTML = '我是页面2';
});
Router.route('page3.html', function() {
    content.innerHTML = '我是页面3';
});