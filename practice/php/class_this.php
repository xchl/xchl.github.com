<?php

class A
{
    public $a;
    function foo(){
        $this->a = 1;//静态调用时会error；$this 是未定义的。
        if(isset($this)){
            echo "\$this is defined(";
            echo get_class($this);
            echo ")\n";
        }else{
            echo "\$this is not defined\n";
        }
    }
}
class B
{
    function bar(){
        A::foo();
    }
}
$a  = new A();
$a->foo();//$this 已定义$this指向A

A::foo();//报错方法里调用了$this->a.

$b = new B();
$b->bar();//$this指向

B::bar();
