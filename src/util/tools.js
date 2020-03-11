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