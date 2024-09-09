    // 元素前方插入文本(因为js没有无法设置：：before所以，实现了一个元素前方插入文本的方法)
    const addContentBefore = (element, content) => {
        // 创建一个新的伪元素
        const pseudoElement = document.createElement('div');
        pseudoElement.classList.add('pseudo-element');
        pseudoElement.textContent = content;
  
        // 将伪元素插入到目标元素的前面
        if (element.firstChild) {
          element.insertBefore(pseudoElement, element.firstChild);
        } else {
          element.appendChild(pseudoElement);
        }
      };
      
      
      const getMoreText = () => {
          // 获取文本容器
          const textContents = document.querySelectorAll('.export_1');
          // 获取按钮容器
          const expandButtons = document.querySelectorAll('.expand_btn');
  
          // 检查文本是否有超出两行的文本，并显示展开按钮
          textContents.forEach((content, index) => {
            // 输出查看当前高度是否超过两行高度（根据当前字体大小进行适配）
            console.log(content.scrollHeight, content.clientHeight)
            if (content.scrollHeight > content.clientHeight) {
              expandButtons[index].style.display = 'block'; // 显示展开按钮
              addContentBefore(expandButtons[index], '...'); // 按钮前方模拟省略号
            }
          });
  
          // 为所有按钮绑定点击事件
          expandButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
              // 切换文本的max-height属性，实现展开效果
              const content = textContents[index];
              if (content.style.maxHeight !== 'none') {
                 // 如果未展开，展开所有文本
                content.style.maxHeight = 'none';
                button.textContent = '收起'; // 改变按钮文本
                addContentBefore(button, '');
              } else {
                // 如果已经展开，恢复到两行
                content.style.maxHeight = '42px'; // 恢复到两行的高度
                button.textContent = '展开'; // 恢复按钮文本
                addContentBefore(button, '...');
              }
            });
          });
        };
  
      getMoreText();
  