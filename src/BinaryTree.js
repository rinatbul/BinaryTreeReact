import {BinarySearchTreeNode, drawBinaryTree, VisualizationType} from 'binary-tree-visualizer';

export const BinaryTree = () => {
    const root = new BinarySearchTreeNode(0);
    const numbers = [];
    return (
        document.addEventListener('keydown', (event) => {
            if (event.keyCode === 32) {
                numbers.push(Math.floor(Math.random() * 201) - 100);

                numbers.forEach((num) => root.insert(num));
                drawBinaryTree(root, document.querySelector('canvas'), {
                    type: VisualizationType.SIMPLE,
                });
            }
        })
    )
}