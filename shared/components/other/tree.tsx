import React, { useState } from 'react';
import { ChevronRight, Folder } from 'lucide-react';
import _ from 'lodash';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface TreeNodeData {
  value: string;
  isDir: boolean;
  children?: TreeNodeData[];
  disabled?: boolean;
  method?: HttpMethod;
}

interface ExpandedState {
  [key: string]: boolean;
}

interface TreeNodeProps {
  node: TreeNodeData;
  level?: number;
  onToggle: (node: TreeNodeData) => void;
  expanded: ExpandedState;
  onDragStart: (node: TreeNodeData) => void;
  onDragOver: (node: TreeNodeData) => void;
  onDrop: (draggedNode: TreeNodeData, targetNode: TreeNodeData) => void;
}

interface TreeViewProps {
  initialData: TreeNodeData[];
  className?: string;
}

const getMethodStyles = (method: HttpMethod): string => {
  switch (method) {
    case 'GET':
      return 'bg-green-100 text-green-700';
    case 'POST':
      return 'bg-blue-100 text-blue-700';
    case 'PUT':
      return 'bg-purple-100 text-purple-700';
    case 'PATCH':
      return 'bg-orange-100 text-orange-700';
    case 'DELETE':
      return 'bg-red-100 text-red-700';
    default:
      return '';
  }
};

const TreeNode: React.FC<TreeNodeProps> = ({
  node,
  level = 0,
  onToggle,
  expanded,
  onDragStart,
  onDragOver,
  onDrop
}) => {
  if (!node) return null;
  
  const isFolder = node.isDir;
  const indent = level * 16;

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text/plain', JSON.stringify(node));
    onDragStart(node);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    onDragOver(node);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedNode = JSON.parse(e.dataTransfer.getData('text/plain')) as TreeNodeData;
    onDrop(droppedNode, node);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
        style={{ marginLeft: `${indent}px` }}
        draggable={!node.disabled}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {isFolder && (
          <button
            onClick={() => onToggle(node)}
            className="p-1 hover:bg-gray-200 rounded-md"
            disabled={node.disabled}
          >
            <ChevronRight
              className={`h-4 w-4 transition-transform ${
                expanded[node.value] ? 'rotate-90' : ''
              }`}
            />
          </button>
        )}
        
        <div className="flex items-center gap-2 w-full">
          {isFolder ? (
            <>
              <Folder className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-900">{node.value}</span>
            </>
          ) : (
            <div className="flex items-center w-full">
              {node.method && (
                <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium mr-2 ${getMethodStyles(node.method)}`}>
                  {node.method}
                </span>
              )}
              <span className="text-sm text-gray-700">{node.value}</span>
            </div>
          )}
        </div>
      </div>
      
      {isFolder && expanded[node.value] && node.children && (
        <div className="ml-4">
          {node.children.map((child, index) => (
            <TreeNode
              key={`${child.value}-${index}`}
              node={child}
              level={level + 1}
              onToggle={onToggle}
              expanded={expanded}
              onDragStart={onDragStart}
              onDragOver={onDragOver}
              onDrop={onDrop}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const TreeView: React.FC<TreeViewProps> = ({ initialData = [], className = '' }) => {
  const [treeData] = useState<TreeNodeData[]>(initialData);
  const [expanded, setExpanded] = useState<ExpandedState>({});
  const [dragNode, setDragNode] = useState<TreeNodeData | null>(null);

  const handleToggle = (node: TreeNodeData) => {
    setExpanded(prev => ({
      ...prev,
      [node.value]: !prev[node.value]
    }));
  };

  const handleDragStart = (node: TreeNodeData) => {
    setDragNode(node);
  };

  const handleDragOver = (node: TreeNodeData) => {
    // Optional: Implement visual feedback for valid drop targets
  };

  const handleDrop = (draggedNode: TreeNodeData, targetNode: TreeNodeData) => {
    if (!targetNode.isDir) return;
    console.log('Dropped', draggedNode, 'into', targetNode);
  };

  if (!treeData || treeData.length === 0) {
    return (
      <div className={`w-full p-4 ${className}`}>
        <p className="text-gray-500 text-sm">No items to display</p>
      </div>
    );
  }

  return (
    <div className={`w-full p-4 ${className}`}>
      {treeData.map((node, index) => (
        <TreeNode
          key={`${node.value}-${index}`}
          node={node}
          onToggle={handleToggle}
          expanded={expanded}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        />
      ))}
    </div>
  );
};

export default TreeView;