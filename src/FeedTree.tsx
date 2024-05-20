import Tree from 'react-d3-tree';

const FeedTree = () => {
  const sumitNode = {
    name: 'Sumit',
    children: [{ name: 'Sofia' }],
  };
  const maaluNode = {
    name: 'Maalu',
    children: [
      {
        ...sumitNode,
      },
    ],
  };

  const prajeeshNode = {
    name: 'Prajeesh',
    children: [
      {
        name: 'Nithin',
      },
    ],
  };

  const supriyaNode = {
    name: 'Supriya',
    children: [
      { ...maaluNode },
      {
        ...prajeeshNode,
      },
    ],
  };

  const hajnaNode = {
    name: 'Hajna',
    children: [
      {
        name: 'Nagamani',
      },
    ],
  };
  const gowthamNode = { name: 'Gowtham', children: [{ name: 'Vismay' }] };
  const shinyNode = {
    name: 'Shiny',
    children: [
      {
        ...gowthamNode,
      },
    ],
  };

  const divyaNode = {
    name: 'Divya S',
    children: [
      {
        ...hajnaNode,
      },
      {
        ...shinyNode,
      },
    ],
  };

  const lekshmiNode = {
    name: 'Lekshmi',
    children: [
      {
        ...supriyaNode,
      },
      { ...divyaNode },
    ],
  };

  const graceNode = { name: 'Grace', children: [{ name: 'Neha' }] };
  const karthikNode = {
    name: 'Karthik',
    children: [
      {
        ...graceNode,
      },
    ],
  };

  const arjunSurendranNode = {
    name: 'Arjun S',
    children: [{ name: 'Nijin' }],
  };

  const deepakNode = {
    name: 'Deepak',
    children: [
      {
        ...arjunSurendranNode,
      },
      { name: 'Sraven' },
    ],
  };

  const nanduNode = {
    name: 'Nandu',
    children: [
      {
        ...karthikNode,
      },
      {
        ...deepakNode,
      },
    ],
  };

  const ushaNode = {
    name: 'Usha',
    children: [
      {
        name: 'Ajesh',
      },
    ],
  };

  const arjunAravindNode = {
    name: 'Arjun A',
    children: [{ name: 'Abhishek' }],
  };

  const ajithNode = {
    name: 'Ajith',
    children: [{ name: 'Sera' }],
  };

  const vvnNode = {
    name: 'VVN',
    children: [{ ...arjunAravindNode }, { ...ajithNode }],
  };

  const jkNode = {
    name: 'JK',
    children: [
      {
        ...ushaNode,
      },
      {
        ...vvnNode,
      },
    ],
  };

  const vijayNode = {
    name: 'Vijay',
    children: [
      {
        ...nanduNode,
      },
      {
        ...jkNode,
      },
    ],
  };

  const thejusNode = { name: 'Thejus', children: [{ name: 'Amal' }] };
  const firozNode = {
    name: 'Firoz',
    children: [
      {
        ...thejusNode,
      },
    ],
  };

  const visakhNode = {
    name: 'Visakh',
    children: [{ name: 'Akisha' }],
  };

  const arunRajNode = {
    name: 'ArunRaj',
    children: [
      {
        ...firozNode,
      },
      {
        ...visakhNode,
      },
    ],
  };

  const geethuNode = {
    name: 'Geethu',
    children: [{ name: 'Ashwin' }],
  };

  const saranyaNode = {
    name: 'Saranya',
    children: [{ name: 'Akshay' }],
  };

  const vipinNode = {
    name: 'Vipin',
    children: [
      {
        ...geethuNode,
      },
      {
        ...saranyaNode,
      },
    ],
  };

  const anilNode = {
    name: 'Anil',
    children: [
      {
        ...arunRajNode,
      },
      {
        ...vipinNode,
      },
    ],
  };

  const parvathyNode = {
    name: 'Parvathy',
    children: [{ name: 'Ajukrishnan' }],
  };

  const michaelNode = {
    name: 'Michael',
    children: [{ name: 'Aromal' }],
  };

  const akhilNode = {
    name: 'Akhil',
    children: [
      {
        ...parvathyNode,
      },
      {
        ...michaelNode,
      },
    ],
  };

  const anjanaNode = {
    name: 'Anjana',
    children: [{ name: 'Arun Sankar' }],
  };

  const georgeNode = {
    name: 'George',
    children: [{ name: 'Akash' }],
  };

  const faizalNode = {
    name: 'Faizal',
    children: [
      {
        ...anjanaNode,
      },
      {
        ...georgeNode,
      },
    ],
  };

  const tessyNode = {
    name: 'Tessy',
    children: [
      {
        ...akhilNode,
      },
      {
        ...faizalNode,
      },
    ],
  };

  const vishnuNode = {
    name: 'Vishnu',
    children: [
      {
        name: 'Suraj',
      },
    ],
  };

  const pratheeshNode = {
    name: 'Pratheesh',
    children: [
      {
        name: 'Abhijith',
      },
    ],
  };

  const bibhuNode = {
    name: 'Bibhu',
    children: [
      {
        ...vishnuNode,
      },
      { ...pratheeshNode },
    ],
  };

  const shalabhaNode = {
    name: 'Shalabha',
    children: [
      {
        name: 'Sam',
      },
    ],
  };

  const nishadNode = {
    name: 'Nishad',
    children: [
      {
        name: 'Sanal',
      },
      {
        name: 'Tom',
      },
    ],
  };

  const sabirNode = {
    name: 'Sabir',
    children: [
      {
        ...shalabhaNode,
      },
      { ...nishadNode },
    ],
  };

  const dineshNode = {
    name: 'Dinesh',
    children: [
      {
        ...bibhuNode,
      },
      {
        ...sabirNode,
      },
    ],
  };

  const nishinNode = {
    name: 'Nishin',
    children: [
      {
        ...lekshmiNode,
      },
      {
        ...vijayNode,
      },
      {
        ...anilNode,
      },
      { ...tessyNode },
      { ...dineshNode },
    ],
  };

  // Here we're using `renderCustomNodeElement` to represent each node
  // as an SVG `rect` instead of the default `circle`.
  const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
    <g>
      <rect
        width="100"
        height="40"
        x="-50"
        y="-20"
        fill="white"
        onClick={toggleNode}
      />
      <text fill="black" fontSize="13px" strokeWidth="1" x="-25">
        {nodeDatum.name}
      </text>
      <br />
      {nodeDatum.attributes?.department && (
        <text fill="black" x="-50" dy="20" strokeWidth="1">
          Department: {nodeDatum.attributes?.department}
        </text>
      )}
    </g>
  );
  const orgChart = { ...nishinNode };
  return (
    <div id="treeWrapper" style={{ width: '100vw', height: '100vh' }}>
      <Tree data={orgChart} orientation="vertical"
        renderCustomNodeElement={renderRectSvgNode}
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
        nodeSize={{ x: 80, y: 200 }}
        translate={{ x: 600, y: 100 }} />
    </div>
  );
};

export default FeedTree;
