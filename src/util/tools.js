export const hasChild = (item) => {
    return item.children && item.children.length !== 0;
}

export const getMenuByRouters = (list) => {
    let res = [];
    list.forEach(item => {
        if (!item.meta || (item.meta && !item.meta.hideInMenu)) {
            let meta = item.meta.index ? item.meta : {
                ...item.meta,
                index: Math.floor(Math.random() * 1000)
            }
            let obj = {
                icon: (item.meta && item.meta.icon) || '',
                name: item.name,
                meta
            }
            if(hasChild(item)) {
                obj.children = getMenuByRouters(item.children);
            }

            if(item.meta && item.meta.href) {
                obj.href = item.meta.href
            }

            res.push(obj);
        }
    });
    return res;
}


export const getBreadCrumbList = (route, homeRoute) => {
    let homeItem = { ...homeRoute }
    let routeMetched = route.matched
    if (routeMetched.some(item => item.name === homeRoute.name)) { 
        return [homeItem] 
    }
    let res = routeMetched.filter(item => {
        return item.meta === undefined || !item.meta.hideInBread
    }).map(item => {
        let meta = { ...item.meta }
        let obj = {
            icon: (item.meta && item.meta.icon) || '',
            name: item.name,
            meta
        }
        return obj
    })
    // res = res.filter(item => {
    //     return !item.meta.hideInMenu
    // })
    const result = [{ ...homeItem, to: homeRoute.path }, ...res];
    return result;
}

export const getHomeRoute = (routers, homeName = 'home') => {
    let i = -1
    let len = routers.length
    let homeRoute = {}
    while (++i < len) {
      let item = routers[i]
      if (item.children && item.children.length) {
        let res = getHomeRoute(item.children, homeName)
        if (res.name) return res
      } else {
        if (item.name === homeName) homeRoute = item
      }
    }
    return homeRoute
  }

export const showTitle = (item, vm) => {
    let title = (item.meta && item.meta.title) || item.name;
    return title;
}