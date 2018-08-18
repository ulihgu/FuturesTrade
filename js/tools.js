//打开数据库
function addData() {
    var html5sql = openDatabase('/db/FT.db', 'stock', 5 * 1024 * 1024, function () {
        console.log('打开数据库成功');
        alert(html5sql+"打开数据库成功");
    })
    if (html5sql) {
        var inputdate = document.getElementById("inputDate");
            SQL_INSERT = 'INSERT INTO stock(date, total,point) VALUES(?,?,?);';
            //插入数据
            var date = '2016年11月10日';
            var total = '3088';
            var point = '40';
            console.log('打开成功:' + SQL_INSERT);
            /*  html5sql.process([{
                'sql': SQL_INSERT,
                'data': [date, total,point]
            }], function () {
                console.log('插入数据成功');
                successCallback();
            }, function () {
                console.log('插入数据失败');
                failureCallback();
            }) */
      } else {
        console.log('打开失败！');
    }
}


//1 数据库存取
//1.1执行语句
/* var SQL_TABLE = 'DROP TABLE IF EXISTS taskList;CREATE TABLE taskList (id INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, title TEXT);';
var SQL_SELECT = 'SELECT * FROM taskList;';
var SQL_INSERT = 'INSERT INTO taskList(date, title) VALUES(?,?);';
var SQL_SELECT_DETAIL = 'SELECT * FROM taskList WHERE date = ?;';
var SQL_UPDATE = 'UPDATE taskList SET title = ? WHERE date = ?;';
var SQL_DELETE = 'DELETE FROM taskList WHERE date = ?;'; */
/* 1.2执行语句
 * name: 数据库的名称
 * displayname: 数据库描述名称
 * size: 数据库大小
 * whenOpen: 打开数据库后，获取到数据库连接时回调
 */
/* html5sql.openDatabase('taskList', 'taskList', 5 * 1024 * 1024, function () {
    console.log('打开数据库成功');
}); */
/*1.3 设置数据库版本，changeVersion()的作用是将旧版本号修改为新版本号，并执行sqlInput语句。
* oldVersion: 旧版本号
* newVersion: 新版本号
* sqlInput: sql语句
* finalSuccessCallback: 成功回调
* failuerCallback: 失败回调
*/
/* if (html5sql.database.version == "") {
    html5sql.changeVersion('', '1.0', SQL_TABLE, function () {
        console.log('数据库不存在，设置版本号成功');
    }, function () {
        console.log('数据库不存在，设置版本号失败');
    });
} else {
    console.log('数据库已存在，版本为：' + html5sql.database.version);
} */
//插入数据html5sql对数据库的增删改查操作都由同一个方法执行，process()
//插入数据
/* var date = '2016年11月10日';
var title = '准备资金双11买买买';
html5sql.process([{
    'sql': SQL_INSERT,
    'data': [date, title]
}], function () {
    console.log('插入数据成功');
    successCallback();
}, function () {
    console.log('插入数据失败');
    failureCallback();
}); */
//查询
/* html5sql.process([{
    'sql': SQL_SELECT,
    'data': []
}], function (tx, results) {
    console.log('查询到' + results.rows.length + '条数据');
    //获取查询结果的第一条记录,得到的是一个对象
    var item = results.rows.item(0);
    //获取对象的各个属性
    var date = item.date;
    var title = item.title;
    successCallback(results);
}, function () {
    console.log('查询数据失败');
}); */
//修改数据
/* var title = '读一本有益的书';
html5sql.process([{
   		   'sql': SQL_UPDATE,
   		   'data': [title]
   		}], function(){
   		   console.log('修改数据成功');
   		}, function(){
   		   console.log('修改数据失败');
   		}); */
//删除数据
/* var date = '2016年11月9日';
html5sql.process([{
   		   'sql': SQL_DELETE, 
   		   'data':[date]
   		}], function(){
   		   console.log('删除数据成功');
   		}, function(){
   		   console.log('删除数据失败');
   		}); */
//rocess(sqlInput, finalSuccessCallback, failureCallback)中的第一个参数sqlInput支持三种输入模式
//第一种为单条sql语句， 第二种为一组sql语句，第三种为一组sql语句对象。上面的例子就是第三种模式
//单条sql语句,字符串的形式
/* var sql = 'SELECT * FROM taskList';
html5sql.process(sql, function(){
   console.log('查询数据成功');
}, function(){
console.log('查询数据失败'); }); */

//或者sql这样写：
/* sql ="CREATE taskList (id INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, title TEXT);" +
"INSERT INTO taskList (date, title) VALUES ('2016年11月8日', '花园除草');" +
"INSERT INTO taskList (date, title) VALUES ('2016年11月9日', '书店买书');" +
"INSERT INTO taskList (date, title) VALUES ('2016年11月10日', '超市买菜');"; */
//
//一组sql语句，只是把上面的字符串拆成几个字符串，装到数组里面
/* sql = ["CREATE taskList (id INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, title TEXT);",
    "INSERT INTO taskList (date, title) VALUES ('2016年11月8日', '花园除草');",
    "INSERT INTO taskList (date, title) VALUES ('2016年11月9日', '书店买书');",
    "INSERT INTO taskList (date, title) VALUES ('2016年11月10日', '超市买菜');"];
html5sql.process(sql, function () {
    console.log('查询数据成功');
}, function () {
    console.log('查询数据失败');
}); */
