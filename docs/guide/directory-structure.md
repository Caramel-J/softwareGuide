# 导航栏结构

为了方面您查看相关模块所在位置，特此把结构展示在此。（持续更新中）

::: structure

├─1.基础配置
│  ├─2.仓库信息
│  └─3.经销商设置
│      ├─1.公司信息
│      ├─2.类别设置
│      └─3.账号设置
│          ├─1.岗位管理
│          └─2.用户管理
├─2.基础业务
│  ├─1.首营品种
│  ├─2.首营企业
│  └─3.首营客户
├─3.文档审核
│  ├─1.首营品种审核
│  ├─2.首营企业审核
│  └─3.首营客户审核
├─4.采购管理
│  ├─1.采购下单
│  ├─2.采购订单
│  ├─3.采购审核
│  └─4.采购记录
├─5.库存管理
│  ├─1.随货同行
│  ├─2.质量验收
│  ├─3.待分配管理
│  ├─4.已分配管理
│  ├─5.库存查询
│  ├─6.退货管理
│  │  ├─1.采购退货
│  │  ├─2.销售退货
│  │  ├─3.退货审核
│  │  └─4.退货查询
│  └─7.库存调整
│      ├─1.库存调拨
│      └─2.调拨记录
├─6.销售管理
│  └─1.销售出库
│      ├─1.销售下单
│      ├─2.销售订单
│      ├─3.出库复核
│      └─4.出库发货
├─7.金融保理
├─8.财务管理
│  ├─1.应付管理
│  └─2.应收管理
├─9.质量管理
│  ├─1.购进验收记录
│  └─2.销售出库记录
└─10.系统配置

:::

<!--

```java
public void test{
    String text = "栏目集合";
    List<ManageCatalog> manageCatalogs = JSON.parseArray(text, ManageCatalog.class);mkdirByManageCatalogs(manageCatalogs);
}
/**
 * 根据菜单创建目录
 * @param manageCatalogs
 */
public void mkdirByManageCatalogs(List<ManageCatalog> manageCatalogs) {
    StringBuffer name = null;
    manageCatalogs.forEach(item -> {
        createFile(new StringBuffer("路径"), item);
    });
}

/**
 * 创建目录
 * @param name
 * @param manageCatalog
 * @return
 */
public boolean createFile(StringBuffer name, ManageCatalog manageCatalog) {            name.append("\\").
    append(manageCatalog.getOrderLeven())
    .append(".").append(manageCatalog.getCatalogName());
        // 判断有子集
        if(!CollectionUtils.isEmpty(manageCatalog.getManageCatalogList())){
            manageCatalog.getManageCatalogList().forEach(item -> {
                createFile(new StringBuffer(name),item);
            });
        }
        File file = new File(name.toString());
        return file.mkdirs();
    }
// 用 tree [目录] 生成树
```

-->

