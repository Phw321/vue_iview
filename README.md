# 开发注意事项
## UI组件按需引入
    配置：`cnpm install babel-plugin-import --save-dev`
        // .babelrc
        {
            "plugins": [["import", {
                "libraryName": "view-design",
                "libraryDirectory": "src/components"
            }]]
        }
        例如：(这样按需引入组件，可以减小体积)
            import { Button, Table } from 'view-design';
            Vue.component('Button', Button);
            Vue.component('Table', Table);
-----
## 项目Git关联操作流程
### commit流程
    - `git branch` 查看本地分支
    - `git pull` 同步分支
    - `git checkout -b xxxxxx` 新建并切换分支
    - `git add .` 将修改(包括删除的文件`git add -A`)提交到暂存区(向上)
    - `git commit -m "提交修改说明"` 提交暂存区
    - `git push origin xxxxxx` 上传分支
    - 分支推送到远程之后，在GitHub上找到它，然后New/Create Pull request
    - Merge pull request

-----
## Vue项目起步流程

## 该项目的作用&目的
    该项目是一个简单的Vue项目，它整合了IView的UI框架，以及有关图表展示的ECharts组件，后续会根据需要，引入一些优秀的组件。争取将该项目壮大成一个基于Vue的管理系统前端项目！