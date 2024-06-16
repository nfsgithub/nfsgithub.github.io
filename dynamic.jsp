<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>动态内容示例</title>
</head>
<body>
    <h2>动态内容演示</h2>
    <% 
        String name = "张三";
        out.println("欢迎您，" + name + "!");
    %>
</body>
</html>
