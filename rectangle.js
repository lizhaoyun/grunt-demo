$(function(){
    /**
     * CSS选择器 重要
     * 先得到元素
     * 计算button的click事件
     * 得到值
     * 计算
     * 输出
     */
    var $width=$('#width'),
        $height=$('#height'),
        $btnCal=$('#calculate'),
        $length=$('#length'),
        $area=$('#area');
    
        $btnCal.click(function () { 
            var w = Number($width.val()),
                h=Number($height.val());
            console.log(w,h);
            console.log($width.val().split("."));
            console.log($height.val().split("."));

            var wplength=$width.val().split(".")[1].length;
            var hplength=$height.val().split(".")[1].length;
            var c = Math.abs(wplength-hplength);
            var m = Math.pow(10,Math.pow(10,c));
            var cm = Math.pow(10,c);
            console.log(c,cm,m);
            if(wplength>hplength){
                var w1 = Number($width.val().replace("."," "));
                var h1 = Number($height.val().replace("."," "))*cm;
                console.log(w1,h1);

            }
            else{
                var w1 = Number($width.val().replace("."," "))*cm;
                var h1 = Number($height.val().replace("."," "));
                console.log(w1,h1);

            }
            var sum=(w1+h1)/m;
            // var p=2*(w+h).toFixed(2),
            //     a=w*h;
            var p=2*sum,
                a=w*h;
            $length.val(p);
            $area.val(a);
            
        });
})