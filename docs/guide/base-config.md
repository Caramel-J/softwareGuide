# 基础配置

基础配置模块，由模块名称可以看出，这个模块中可以设置一些最基础的信息 如 仓库信息、岗位信息、预警天数、类别的配置等

::: warning 注意

软件中星号（*）为必填项，基础配置模块比较重要，请务必认真读下文

:::

## 仓库信息

仓库是此软件中一个比较重要的模块，因为入库和出库操作与仓库信息密不可分。您拿到账号时，我们是为您内置了一个仓库和 5 个仓位（合格、不合格、待验、退货、发货），因为是系统内置的原因，此仓库不可以删除。

下文将教您如何对仓库进行管理。

您登陆后点击仓库信息显示如下界面（权限都勾选状态下），如 [图 1 - 1](/baseConfig/ckinfo/1.1.png) 所示

<div class="fy-show-img">
    <img src="\baseConfig\ckinfo\1.1.png" alt="仓库信息" />
    <span>图 1-1</span>
</div>

---

### 创建仓库

点击 **新增** 按钮，弹出对话框 ，如 [图 1 - 2](/baseConfig/ckinfo/1.2.png)  所示，填写完成后点击 **确定** 按钮，软件上方会提示相关反馈信息，如 [图 1 - 3](/baseConfig/ckinfo/1.3.png) 所示。

<div class="fy-show-img">
    <img src="\baseConfig\ckinfo\1.2.png" alt="新增仓库信息" />
    <span>图 1-2</span>
</div>

<div class="fy-show-img">
    <img src="\baseConfig\ckinfo\1.3.png" alt="新增仓库信息" />
    <span>图 1-3</span>
</div>

---

### 创建仓位

仓库创建好之后，我们还要创建相对应的仓位，在仓库信息上点击 **查看仓位** 按钮，则会出现对话框，这便是此仓库中的仓位信息了，如 [图 1 - 4](/baseConfig/ckinfo/1.4.png) 所示。

<div class="fy-show-img">
    <img src="\baseConfig\ckinfo\1.4.png" alt="新增仓库信息" />
    <span>图 1-4</span>
</div>

当点击 **新增仓位** 按钮时，会弹出对话框，如 [图 1 - 5](/baseConfig/ckinfo/1.5.png) 所示，填写完成后点击 **确定** 按钮，软件上方会提示相关反馈信息，如 [图 1 - 6](/baseConfig/ckinfo/1.6.png) 所示。

<div class="fy-show-img">
    <img src="\baseConfig\ckinfo\1.5.png" alt="新增仓库信息" />
    <span>图 1-5</span>
</div>

<div class="fy-show-img">
    <img src="\baseConfig\ckinfo\1.6.png" alt="新增仓库信息" />
    <span>图 1-6</span>
</div>

至此仓库、仓位的新增结束。

---

### 修改仓库信息

当我们以为某些原因想修仓库信息时，在相应的仓库信息上点击 **修改** 按钮，便会弹出对话框，修改相应的信息，完成之后点击 **确定** 按钮，软件会提示相关的反馈信息（此项不在赘述），如 [图 1 - 7](/baseConfig/ckinfo/1.7.png) 所示。

<div class="fy-show-img">
    <img src="\baseConfig\ckinfo\1.7.png" alt="修改仓库信息" />
    <span>图 1-7</span>
</div>

---

### 删除仓库信息

当您的仓库不再使用时，可以选择删除仓库。在相应的仓库信息上点击 **删除** 按钮，系统会向您进一步确认是否删除，以免误操作，如 [图 1 - 8](/baseConfig/ckinfo/1.8.png) 所示，当您点击 **确定** 时，此仓库将被永久删除。

<div class="fy-show-img">
    <img src="\baseConfig\ckinfo\1.8.png" alt="删除仓库信息" />
    <span>图 1-8</span>
</div>

---

### 删除仓位信息

删除仓位与删除仓库基本相同，首先在相应的仓库信息上点击 **查看仓位** 按钮，在要删除的仓位上点击 **删除** 按钮，同样系统会进一步确认是否删除，如 [图 1 - 9](/baseConfig/ckinfo/1.8.png) 所示，当点击 **确认** 时，此仓位将被永久删除。

<div class="fy-show-img">
    <img src="\baseConfig\ckinfo\1.9.png" alt="删除仓位信息" />
    <span>图 1-9</span>
</div>

---

::: tip 提示

关于仓库信息的操作，上面文章已描述完成，如实际操作中遇到问题，请联系我们。

:::

## 经销商设置

经销商设置作为一个重要模块，里面设置了预警的天数，公司的信息与经营范围，公司的岗位设置，人员分配都需在此模块中进行设置。

::: warning 提示

岗位权限的设置为此模块的难点，权限一旦设置错误，会造成一些操作无法进行

:::

---

### 公司信息

这个模块只有个必填项，那就是公司的 **经营范围** 如果经营范围选择错误的话，是无法进行采购的。

当点击 公司信息 时，会进入如下页面如 [图 2 - 1](/baseConfig/ckinfo/2.1.png) 所示。

<div class="fy-show-img">
    <img src="\baseConfig\ckinfo\2.1.png" alt="公司信息" />
    <span>图 2-1</span>
</div>

经营范围在界面右边选择，联系电话一般也填写上，方面我们日后和您取得联系，其他信息可以选填。

系统默认预警期为60天，请按需修改。

修改完成后，点击右上角保存按钮，即便完成了对公司信息的修改。

---

### 类别设置

这个模块中设置的类别是您在新增首营品种、首营企业、首营客户中选择的类别。

系统已经内置了五个产品类别（试剂、药品、耗材、器械、其他）；四个供应商类别（医疗器械生产企业、医疗器械生产企业、医疗机构、其他）；四个企业类别（医疗器械生产企业、医疗器械经营企业、个人、其他）。

可按需进行添加与删除。

---

#### 添加类别

点击 **新增** 按钮，在弹出的对话框中选择需要添加的类别并输入新的类别名称，如[图 2 - 2](/baseConfig/ckinfo/2.2.png) 所示。填写完成后，点击 **确定** 按钮即可保存。

<div class="fy-show-img">
    <img src="\baseConfig\ckinfo\2.2.png" alt="新增类别" />
    <span>图 2-2</span>
</div>

---

#### 删除类别

点击 **删除** 按钮，在弹出的对话框中选择需要删除的类别，如 [图 2 - 3](/baseConfig/ckinfo/2.3.png) 所示，选择完成后，点击 **删除** 按钮后，系统会进一步确实是否删除，点击 **确认** 按钮后即可删除。

<div class="fy-show-img">
    <img src="\baseConfig\ckinfo\2.3.png" alt="删除类别" />
    <span>图 2-3</span>
</div>

## 账号设置

账号设置里面包含了对岗位的设置以及公司人员的设置。下面手把手教您玩转此模块。

### 岗位设置

岗位作为一个比较重要的模块，对软件信息的精准把控，如采购岗位的人，不许看到销售的信息，普通员工不允许去审核单据等。这些都在此模块中进行设置与更改。

::: warning 小提示

自己不允许修改自己的权限，任何人不可以修改管理员的权限

:::

点击岗位设置，出现的界面如 [图 3 - 1](/baseConfig/ckinfo/3.1.png) 所示，左侧为 **岗位列表** 区域，右侧为 **栏目权限** 区域。

<div class="fy-show-img">
    <img src="\baseConfig\ckinfo\3.1.png" alt="岗位信息" />
    <span>图 3-1</span>
</div>

---

#### 添加岗位

点击左边区域中的 **新增** 按钮，即弹出一个对话框如 [图 3 - 2](/baseConfig/ckinfo/3.2.png) 所示，父级岗位中会有已经存在的岗位供您选择，填写好信息后点击 **确定** 按钮，即可完成岗位的新增。

<div class="fy-show-img">
    <img src="\baseConfig\ckinfo\3.2.png" alt="添加岗位信息" />
    <span>图 3-2</span>
</div>

::: tip 小提示

父级岗位中有个选项为 **根岗位** 选项，此选项代表您要添加的岗位与系统岗位同级

:::

---

#### 分配权限

添加岗位操作完成后，我们要给这个岗位设置相应的权限（修改权限同理）；

1. 点击左边岗位列表区域中要修改的岗位如 [图 3 - 3](/baseConfig/ckinfo/3.3.png) 所示，我们看到 **已分配** 列表中没有数据，我们需要从 **待分配** 列表中把需要分配的栏目添加到 **已分配** 列表中；

   <div class="fy-show-img">
       <img src="\baseConfig\ckinfo\3.3.png" alt="展示岗位权限" />
       <span>图 3-3</span>
   </div>

2. 如您需要分配给此岗位所有的栏目，点击 **待分配** 列表中的选择框，那么 **待分配** 列表中的所有条目将被选中；如您只需要分配部分栏目给此岗位，点击 **待分配** 列表中对应栏目前面的选择框；

3. 这时，点击添加按钮，效果如 [图 3 - 4](/baseConfig/ckinfo/3.4.png) 所示。

   <div class="fy-show-img">
       <img src="\baseConfig\ckinfo\3.4.png" alt="分配权限信息" />
       <span>图 3-4</span>
   </div>

4. 栏目权限分配好之后，需要分配对应栏目的操作（添加、删除、审核、修改等），点击 **岗位权限管理** 选项卡如 [图 3 - 5](/baseConfig/ckinfo/3.5.png) 所示。

   <div class="fy-show-img">
       <img src="\baseConfig\ckinfo\3.5.png" alt="分配权限信息" />
       <span>图 3-5</span>
   </div>

5. 点开我们刚刚分配的栏目（由于都是新分配的栏目所以要挨个点击），右侧出现五个复选框，这就代表这个栏目中需要用到的操作（**没有的操作是灰色的，无法勾选**），挨个分配栏目权限。

6. 分配完成后，点击 **保存所有修改项** 按钮，即可完成保存，如 [图 3 - 6](/baseConfig/ckinfo/3.6.png) 所示。

   <div class="fy-show-img">
       <img src="\baseConfig\ckinfo\3.6.png" alt="分配权限信息" />
       <span>图 3-6</span>
   </div>

---

::: danger 问题

为什么不是分配好栏目，所有的权限都是勾选状态？

:::

::: tip 回答

如果全部是已勾选状态，那么如果不需要某些权限，还是要去挨个勾选；

我们为每个栏目都设置了 **全选** 按钮，如您需此栏目所有权限，点击按钮即可；

:::

---

#### 删除岗位

删除操作基本都是大同小异，您只需勾选相应岗位，点击 **删除** 按钮，系统会进一步确认您是否删除如 [图 3 - 7](/baseConfig/ckinfo/3.7.png) 所示，点击 **确定** 按钮，即可完成删除，**注意此删除会一并删除岗位下的员工**。

<div class="fy-show-img">
    <img src="\baseConfig\ckinfo\3.7.png" alt="删除岗位" />
    <span>图 3-7</span>
</div>

---

### 用户管理

添加操作人员的信息，并为其分配岗位，这样一来就可以限制公司人员的操作权限。

此模块提供了添加、删除、重置密码、修改这几个操作

---

#### 新增用户

::: tip 提示

**用户名** 字段是您在登时所使用的登录名称，不可重复，尽量用英文+数字的方式

:::

点击 **新增** 按钮，在弹出的对话框中输入信息并选择岗位，然后点击 **提交** 按钮如 [图 3 - 8](/baseConfig/ckinfo/3.8.png) 所示，即可完成保存。

<div class="fy-show-img">
    <img src="\baseConfig\ckinfo\3.8.png" alt="新增用户" />
    <span>图 3-8</span>
</div>

---

#### 修改用户

点击 **修改** 按钮，在弹出的对话框中修改用户的姓名、邮箱、电话、QQ号码这几项信息，修改完成之后点击 **提交** 按钮如 [图 3 - 9](/baseConfig/ckinfo/3.9.png) 所示，即可完成修改。

<div class="fy-show-img">
    <img src="\baseConfig\ckinfo\3.9.png" alt="修改用户" />
    <span>图 3-9</span>
</div>

#### 重置密码

点击 **重置密码** 按钮，系统会重置为默认密码 **88888888** ，不需要您输入新的密码，系统会进一步确认您是否重置以免误操作 [图 3 - 10](/baseConfig/ckinfo/3.9.png)。

<div class="fy-show-img">
    <img src="\baseConfig\ckinfo\3.10.png" alt="重置用户密码" />
    <span>图 3-10</span>
</div>

#### 删除用户

* 点击右上角 **删除** 按钮是可以多条删除，您只需勾选需要删除的条目即可，系通会进一步确认您是否删除，以免误操作，点击 **确认** 按钮即可删除 [图 3 - 11](/baseConfig/ckinfo/3.11.png)。

  <div class="fy-show-img">
      <img src="\baseConfig\ckinfo\3.11.png" alt="多选删除用户" />
      <span>图 3-11</span>
  </div>

* 点击条目上的 **删除** 按钮可以单条删除，同样系通会进一步确认您是否删除，以免误操作，点击 **确认** 按钮即可删除 [图 3 - 12](/baseConfig/ckinfo/3.12.png)。

  <div class="fy-show-img">
      <img src="\baseConfig\ckinfo\3.12.png" alt="单条删除用户" />
      <span>图 3-12</span>
  </div>

---

::: tip 提示

基础配置的介绍基本就结束了，后续如有新功能，我们会持续更新此文档，您不必担心文档与软件不符问题。

:::