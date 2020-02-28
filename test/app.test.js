const expect=require('chai').expect,
    http=require('http');
describe('矩形计算器http api 接口测试',function(){
    it('正确请求格式测试',function(done){
        http.get('http://localhost:8080/rectangle?width=5&height=7',function(res){
            var result = '';
            res.on('data',function(chunk){
                result += chunk;
            });
            res.on('end',function(){
                var rect=JSON.parse(result);
                expect(rect.area).to.be.equal(35);
                expect(rect.perimeter).to.be.equal(24);
                done();//异步单元测试一定要引入done方法并在断言结束后调用
            })
        })
    })
})