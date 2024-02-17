const makeMenuItems = function makeDivs(...args) {
  const list = document.createElement('ul');
  args.forEach((element) => {
    const item = document.createElement('li');
    item.textContent = element;
    list.appendChild(item);
  });
  return list;
};

const attachMethod = (obj) => ({
  attach: (parent = document.body, child = 'list') => {
    parent.appendChild(obj[child]);
  },
});

const setClassMethod = (obj) => ({
  setClass: (classToSet, key = 'list') => {
    const nodes = obj[key].childNodes
    nodes.forEach((node) => {
      node.classList.add(classToSet);
    });
  },
});

const removeClassMethod = (obj) => ({
  removeClass: (classToRemove, key = 'list') => {
    const nodes = obj[key].childNodes
    nodes.forEach((node) => {
      node.classList.remove(classToRemove);
    });
  },
});

const toggleClassMethod = (obj) => ({
  toggleClass: (class1, class2, key = 'list') => {
    const nodes = obj[key].childNodes
    nodes.forEach((node) => {
      const classes = node.classList;
      if (classes.contains(class2)) {
        classes.remove(class2);
        classes.add(class1);
      } else if (classes.contains(class1)) {
        classes.remove(class1);
        classes.add(class2);
      } else {
        classes.add(class1);
      }
    });
  },
});

const setTextContentMethod = (obj) => ({
  setTextContent: (oldValue, newValue, key = 'list') => {
    const nodes = obj[key].childNodes;
    nodes.forEach((node) => {
      if (node.textContent.toLowerCase() === oldValue.toLowerCase()) {
        node.textContent = newValue;
      }
    })
  },
});

const addItemToMenu = (obj) => ({
  addItem: (value, key = 'list') => {
    const newItem = document.createElement('li');
    newItem.textContent = value;
    const classes = obj[key].firstChild.classList;
    classes.forEach((element) => {
    newItem.classList.add(element);
    });
    obj[key].appendChild(newItem);
  },
});

const basicStylingMethod = (obj) => ({
  addBasicStyling: (key = 'list') => {
    obj[key].style.listStyleType = 'none';
    obj[key].style.display = 'flex';
    obj[key].style.flexDirection = 'column';
  },
});

const menuClass = function makeMenu(list) {
  const menu = {
    list
  };
  return {
    ...menu,
    ...attachMethod(menu),
    ...setClassMethod(menu),
    ...removeClassMethod(menu),
    ...setTextContentMethod(menu),
    ...toggleClassMethod(menu),
    ...addItemToMenu(menu),
    ...basicStylingMethod(menu),
  };
};

export {
  menuClass,
  attachMethod,
  setClassMethod,
  removeClassMethod,
  toggleClassMethod,
  makeMenuItems,
};
