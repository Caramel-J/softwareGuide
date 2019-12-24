# 库存管理

此模块里面包含了，对库存的一些操作，分配入库、库存调拨等，与库存相关的操作都包含在此模块中。

## 随货同行

随货同行里面的数据是由 **采购订单** 审核后的部分数据生成的，里面有些内容还需要用户自己来补充。

点击 **编辑** 按钮如 [图 1 - 1](/inventory/1.1.png) 所示，进入编辑页面如 [图 1 - 2](/inventory/1.2.png) 所示，填写相应的信息，填写完成之后，点击右上角 **提交** 按钮即可。

<div class="fy-show-img">
    <img src="\inventory\1.1.png" alt="随货同行订单" />
    <span>图 1-1</span>
</div>

<div class="fy-show-img">
    <img src="\inventory\1.2.png" alt="编辑-随货同行订单" />
    <span>图 1-2</span>
</div>

---

## 质量验收

点击 **质量验收** 后可以看到需要验收的采购订单信息，如 [图 2 - 1](/inventory/2.1.png) 所示

<div class="fy-show-img">
    <img src="\inventory\2.1.png" alt="质量验收" />
    <span>图 2-1</span>
</div>

在用户需要验收的订单条目上点击 **验收** 按钮，进入验收详情如 [图 2 - 2](/inventory/2.2.png) 所示

<div class="fy-show-img">
    <img src="\inventory\2.2.png" alt="质量验收-验收" />
    <span>图 2-2</span>
</div>

在图中可以看到，有 **未分配数量** 一栏，点击 **拆分产品** 按钮，可以把产品拆分为不同的 **批号** ，在弹出的对话框中填写批号信息，如 [图 2 - 3](/inventory/2.3.png) 所示。

<div class="fy-show-img">
    <img src="\inventory\2.3.png" alt="质量验收-验收" />
    <span>图 2-3</span>
</div>

当 **未分配数量为 0** 时，即可点击右上角 **提交** 按钮，进行保存，如 [图 2 - 4](/inventory/2.4.png) 所示。

<div class="fy-show-img">
    <img src="\inventory\2.4.png" alt="质量验收-验收" />
    <span>图 2-4</span>
</div>

::: tip 提示

当 **合格数量** 小于（<） **验收数量** 即存在不合格产品。

不合格品处理方式介绍：

* 放入不合格品库

  把不合格的产品放入系统创建的不合格品仓库中，可在 **库存管理 → 库存查询** 中查看

* 生成采购退货单

  把不合格的产品自动生成采购退货单，可在 **库存管理 → 退货管理 → 采购退货** 中查看

:::

---

## 待分配管理

待分配管理即入库单，里面是验收合格的记录，可以进行分配入库。

点击 **待分配管理** 看到的是验收合格的记录如 [图 3 - 1](/inventory/3.1.png) 所示，点击 **分配入库** 按钮进入分配页面如 [图 3 - 2](/inventory/3.2.png) 所示。

<div class="fy-show-img">
    <img src="\inventory\3.1.png" alt="分配入库" />
    <span>图 3-1</span>
</div>

<div class="fy-show-img">
    <img src="\inventory\3.2.png" alt="分配入库-详情" />
    <span>图 3-2</span>
</div>

在明细中可以看到，有 **未分配数量** 一栏，点击 **分配入库** 按钮，可以把产品分配到不同的 **仓库** 中 ，在弹出的对话框中选择 **仓库** 信息，如 [图 3 - 3](/inventory/3.3.png) 所示。 

<div class="fy-show-img">
    <img src="\inventory\3.3.png" alt="分配入库-分配入库" />
    <span>图 3-3</span>
</div>

当 **未分配数量为 0** 时，即可点击右上角 **提交** 按钮，进行保存，如 [图 3 - 4](/inventory/3.4.png) 所示。

<div class="fy-show-img">
    <img src="\inventory\3.4.png" alt="分配入库-分配入库" />
    <span>图 3-4</span>
</div>

::: warning 提示

点击 **提交** 后，填写的的信息将会被分配到仓库中，可在 **库存管理 → 库存查询** 与 **库存管理 → 已分配管理** 中查看，此操作不可逆

:::

---

## 已分配管理

点击 **已分配管理** 在里面可以查看已经分配的产品信息，如 [图 4 - 1](/inventory/4.1.png)，可以进行筛选查询记录

<div class="fy-show-img">
    <img src="\inventory\4.1.png" alt="已分配管理" />
    <span>图 4-1</span>
</div>

---

## 退货管理

退货分为 **采购退货** 与 **销售退货** 两种，采购退货填写好之后，需要进行 **审核** ，审核成功之后才会对库存进行相应的变更

### 采购退货

在需要退回的产品条目中，点击 **退回** 按钮，填写需要退回的数量，如 [图 5 - 1](/inventory/5.1.png)，填写完成之后，点击 **提交** 按钮进行保存

<div class="fy-show-img">
    <img src="\inventory\5.1.png" alt="采购退货" />
    <span>图 5-1</span>
</div>

---

## 销售退货

与 [退货管理 - 采购退货](inventory.html#采购退货) 步骤相同，此不再赘述

---

## 退货审核

当用户填写了 **采购退货** 或 **销售退货** 单据后，在此模块中进行审核操作，如 [图 5 - 2](/inventory/5.2.png) 所示

<div class="fy-show-img">
    <img src="\inventory\5.2.png" alt="退货审核" />
    <span>图 5-2</span>
</div>

点击条目上的 **审核** 即可对库存信息进行变更

---

## 库存调整

再此模块中可以对库存进行调整

### 库存调拨

在列表信息中点击 **调拨** 按钮，填写调拨信息，即可完成库存的调拨，如 [图 6 - 1](/inventory/6.1.png) 所示

<div class="fy-show-img">
    <img src="\inventory\6.1.png" alt="库存调拨" />
    <span>图 6-1</span>
</div>

### 调拨记录

当用户操作完库存调拨模块后，生成的记录在此模块中查看，如 [图 6 - 2](/inventory/6.2.png) 所示

<div class="fy-show-img">
    <img src="\inventory\6.2.png" alt="调拨记录" />
    <span>图 6-2</span>
</div>

---

