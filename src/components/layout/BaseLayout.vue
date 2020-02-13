<template>
  <div class="layout">
    <Layout style="minHeight: 100vh;">
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">
            <span>{{ WEBNAME }}</span>
          </div>
          <Icon
            :style="{margin: '0 20px', color: '#FFF', 'font-size': '22px', margin: '0px 30px', 'vertical-align': 'middle'}"
            :class="rotateIcon"
            type="md-menu"
            size="24"
            @click.native="collapsedSider"
          ></Icon>
          <div class="user-avatar-dropdown">
            <Dropdown @on-click="handleClick">
              <span>Jason</span>
              <Icon :size="15" type="md-arrow-dropdown" :class="{changed: isChanged}"></Icon>
              <DropdownMenu slot="list">
                <DropdownItem name="logout">退出登录</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
          <Menu
            ref="leftmenu"
            @on-open-change="isCollapsed=false"
            @on-select="selectmenu"
            :active-name="activeName"
            theme="dark"
            width="auto"
            :class="menuitemClasses"
            :open-names="opennames"
            accordion
          >
            <MenuItem name="1" to="/">
              <Icon type="ios-analytics"/>
              <span>系统总览</span>
            </MenuItem>
            <MenuItem name="5">
              <Icon type="ios-keypad-outline"/>
              <span>安全管理</span>
            </MenuItem>
            <Submenu name="30">
              <template slot="title">
                <Icon type="ios-settings"></Icon>
                <span>系统设置</span>
              </template>
              <MenuItem name="30-1" to="/setting/password">修改密码</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Content :style="{padding: '10px', background: '#fff', margin: '6px'}">
          <router-view></router-view>
        </Content>
      </Layout>
      <Footer class="layout-footer-center">2019.10-{{ footerTime }} &copy; 荆轲</Footer>
    </Layout>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      WEBNAME: this.$config.CONSTANTS.WEBNAME,
      opennames: [],
      activeName: "",
      isCollapsed: false,
      isChanged: false
    };
  },
  watch: {
    isCollapsed(val) {
      if (val) {
        this.opennames = [];
        this.$nextTick(() => {
          this.$refs.leftmenu.updateOpened();
        });
      }
    }
  },
  computed: {
    footerTime() {
      const now = `0${new Date().getMonth() + 1}`.slice(-2);
      return `${new Date().getFullYear()}.${now}`;
    },
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    },
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    }
  },
  created() {
    if (this.$route.meta && this.$route.meta.index) {
      this.activeName = this.$route.meta.index;
      this.opennames.push(this.$route.meta.index.split("-")[0]);
    }
  },
  methods: {
    selectmenu(name) {
      this.isCollapsed = false;
      if (name.split("-")[1]) {
        this.opennames.push(name.split("-")[0]);
      } else {
        this.opennames = [];
      }
      this.$nextTick(() => {
        this.$refs.leftmenu.updateOpened();
      });
    },
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    },
    handleClick(name) {
      switch (name) {
        case "logout":
          this.logout();
          break;
        case "message":
          this.message();
          break;
      }
    },
    handleChange() {
      this.isChanged = !this.isChanged;
    }
  }
};
</script>

<style>
@import './baseLayout.css';
</style>