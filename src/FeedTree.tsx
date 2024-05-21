import Tree from 'react-d3-tree';

const FeedTree = () => {
  const sumitNode = {
    name: 'Sumit',
    designation: 'SE',
    children: [{ name: 'Sofia', designation: 'E', }],
  };
  const maaluNode = {
    name: 'Maalu',
    designation: 'SE',
    children: [
      {
        ...sumitNode,
      },
    ],
  };
  const graceNode = { name: 'Grace', designation: 'SE', children: [{ name: 'Neha', designation: 'E' }] };

  const prajeeshNode = {
    name: 'Prajeesh', designation: 'SE',
    children: [
      {
        ...graceNode,
      },
    ],
  };

  const supriyaNode = {
    name: 'Supriya', designation: 'APE',
    children: [
      { ...maaluNode },
      {
        ...prajeeshNode,
      },
    ],
  };

  const hajnaNode = {
    name: 'Hajna',
    designation: 'SE',
    children: [
      {
        name: 'Nagamani',
        designation: 'SE',
      },
    ],
  };
  const gowthamNode = {
    name: 'Gowtham',
    children: [{ name: 'Vismay', designation: 'SE' }],
    designation: 'SE',
  };
  const shinyNode = {
    name: 'Shiny', designation: 'LE',
    children: [
      {
        ...gowthamNode,
      },
    ],
  };

  const divyaNode = {
    name: 'Divya S', designation: 'APE',
    children: [
      {
        ...hajnaNode,
      },
      {
        ...shinyNode,
      },
    ],
  };

  const thejusNode = { name: 'Thejus', designation: 'SE', children: [{ name: 'Amal', designation: 'E' }] };

  const firozNode = {
    name: 'Firoz', designation: 'SE',
    children: [
      {
        ...thejusNode,
      },
    ],
  };

  const visakhNode = {
    name: 'Visakh', designation: 'SE',
    children: [{ name: 'Akisha', designation: 'SE' }],
  };

  const arunRajNode = {
    name: 'ArunRaj', designation: 'PE',
    children: [
      {
        ...firozNode,
      },
      {
        ...visakhNode,
      },
    ],
  };

  const lekshmiNode = {
    name: 'Lekshmi', designation: 'A',
    children: [
      {
        ...supriyaNode,
      },
      { ...arunRajNode },
    ],
  };
  const akashNode = {
    name: 'Akash', designation: 'SE',
    children: [{ name: 'Gayathri', designation: 'E' }],
  };

  const karthikNode = {
    name: 'Karthik', designation: 'SE',
    children: [
      {
        ...akashNode,
      },
    ],
  };

  const arjunSurendranNode = {
    name: 'Arjun S', designation: 'SE',
    children: [{ name: 'Nijin', designation: 'E' }],
  };

  const deepakNode = {
    name: 'Deepak', designation: 'SE',
    children: [
      {
        ...arjunSurendranNode,
      },
      { name: 'Sraven', designation: 'SE' },
    ],
  };

  const nanduNode = {
    name: 'Nandu', designation: 'APE',
    children: [
      {
        ...karthikNode,
      },
      {
        ...deepakNode,
      },
    ],
  };

  const ajeshNode = {
    name: 'Ajesh', designation: 'SE',
    children: [
      {
        name: 'Nithin Prakash', designation: 'E',
      },
    ],
  };

  const ushaNode = {
    name: 'Usha', designation: 'SE',
    children: [
      {
        ...ajeshNode,
      },
    ],
  };

  const arjunAravindNode = {
    name: 'Arjun A', designation: 'SE',
    children: [{ name: 'Abhishek' }],
  };

  const ajithNode = {
    name: 'Ajith', designation: 'SE',
    children: [{ name: 'Sera (E)', designation: 'E' }],
  };

  const vvnNode = {
    name: 'VVN', designation: 'SE',
    children: [{ ...arjunAravindNode }, { ...ajithNode }],
  };

  const jkNode = {
    name: 'JK', designation: 'APE',
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
    name: 'Vijay', designation: 'A',
    children: [
      {
        ...nanduNode,
      },
      {
        ...jkNode,
      },
    ],
  };

  const geethuNode = {
    name: 'Geethu', designation: 'SE',
    children: [{ name: 'Ashwin', designation: 'E', }],
  };

  const saranyaNode = {
    name: 'Saranya', designation: 'SE',
    children: [{ name: 'Akshay', designation: 'E', }],
  };

  const vipinNode = {
    name: 'Vipin', designation: 'LE',
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
    name: 'Anil', designation: 'PE',
    children: [
      {
        ...divyaNode,
      },
      {
        ...vipinNode,
      },
    ],
  };

  const parvathyNode = {
    name: 'Parvathy', designation: 'SE',
    children: [{ name: 'Ajukrishnan', designation: 'E' }],
  };

  const michaelNode = {
    name: 'Michael', designation: 'SE',
    children: [{ name: 'Aromal', designation: 'E', }],
  };

  const akhilNode = {
    name: 'Akhil', designation: 'LE',
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
    name: 'Anjana', designation: 'LE',
    children: [{ name: 'Arun Sankar', designation: 'SE', }],
  };

  const georgeNode = {
    name: 'George', designation: 'SE',
    children: [{ name: 'Rachel (E)', designation: 'E' }],
  };

  const faizalNode = {
    name: 'Faizal', designation: 'LE',
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
    name: 'Tessy', designation: 'AA',
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
    name: 'Vishnu', designation: 'LE',
    children: [
      {
        name: 'Suraj', designation: 'SE',
      },
      {
        name: 'Nithin Peter', designation: 'SE',
      },
    ],
  };

  const pratheeshNode = {
    name: 'Pratheesh', designation: 'LE',
    children: [
      {
        name: 'Abhijith', designation: 'E',
      },
    ],
  };

  const bibhuNode = {
    name: 'Bibhu', designation: 'LE',
    children: [
      {
        ...vishnuNode,
      },
      { ...pratheeshNode },
    ],
  };

  const shalabhaNode = {
    name: 'Shalabha', designation: 'LE',
    children: [
      {
        name: 'Sam', designation: 'SE',
      },
      {
        name: 'Sanal', designation: 'E',
      },
    ],
  };

  const nishadNode = {
    name: 'Nishad', designation: 'SE',
    children: [
      {
        name: 'Tom', designation: 'SE',
      },
    ],
  };

  const sabirNode = {
    name: 'Sabir', designation: 'LE',
    children: [
      {
        ...shalabhaNode,
      },
      { ...nishadNode },
    ],
  };

  const dineshNode = {
    name: 'Dinesh', designation: 'LE',
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
    name: 'Nishin', designation: 'SA',
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
        height="60"
        x="-50"
        y="-30"
        fill="white"
        onClick={toggleNode}
      />
      <foreignObject fill="grey" fontSize="14px" fontWeight="bold" x="-50"
        y="-20" width="100" height="50" style={{ textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div >
            <p style={{ margin: '0' }}>{nodeDatum.name}
            </p>
            <p style={{ margin: '0' }}>({nodeDatum?.designation})</p>
          </div>
          {nodeDatum.children && (
            <img onClick={toggleNode} src={nodeDatum.__rd3t.collapsed ? "icons8-expand-48.png" : "icons8-collapse-64.png"} width="24px" height="24px"></img>
          )}
        </div>

      </foreignObject>

    </g >
  );
  const orgChart = { ...nishinNode };
  return (
    <><header style={{ textAlign: 'center' }}>
      <h2>FEED Tree - React</h2>
    </header>{' '}
      <div id="treeWrapper" style={{ width: '99vw', height: '100vh' }}>
        <Tree data={orgChart} orientation="vertical"
          renderCustomNodeElement={renderRectSvgNode}
          nodeSize={{ x: 150, y: 200 }} />
      </div></>
  );
};

export default FeedTree;
