1 在URL中区分大小写，如witisoPC与witiospc是不同的；
2 一些JS文件没有包含；
3 一些GB2312的文件；
4 new repository时里面最好不要有任何文件，否则在push时会有问题；
5 按以下顺序push文件到new repository
5.1 cd new repository

5.2 git init
5.3 git add .
5.4 git commit -m "first commit"
5.5 git remote add origin https://github.com/wwuhn/wwuhn.github.io.git
5.6 git push -u origin master
previous

1 新建文件夹：“create new file”→newfolder/test.txt

2 上传you2后，发现在在https://wwuhn.github.io 的链接内不能访问 https://wwuhn.github.io/you2/index.html ，将后面的index.html去掉后可以访问；

3 编码问题：除了声明为utf－8以外,其文件本身的字符编码格式也要保存为utf－8，包括js文件；
