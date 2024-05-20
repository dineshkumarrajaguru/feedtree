import Tree from 'react-d3-tree';

const FeedTree = () => {
  const sumitNode = {
    name: 'Sumit (SE)',
    children: [{ name: 'Sofia (E)' }],
  };
  const maaluNode = {
    name: 'Maalu (SE)',
    children: [
      {
        ...sumitNode,
      },
    ],
  };
  const graceNode = { name: 'Grace (SE)', children: [{ name: 'Neha (E)' }] };

  const prajeeshNode = {
    name: 'Prajeesh (SE)',
    children: [
      {
        ...graceNode,
      },
    ],
  };

  const supriyaNode = {
    name: 'Supriya (APE)',
    children: [
      { ...maaluNode },
      {
        ...prajeeshNode,
      },
    ],
  };

  const hajnaNode = {
    name: 'Hajna (SE)',
    children: [
      {
        name: 'Nagamani (SE)',
      },
    ],
  };
  const gowthamNode = {
    name: 'Gowtham (SE)',
    children: [{ name: 'Vismay (E)' }],
  };
  const shinyNode = {
    name: 'Shiny (LE)',
    children: [
      {
        ...gowthamNode,
      },
    ],
  };

  const divyaNode = {
    name: 'Divya S (APE)',
    children: [
      {
        ...hajnaNode,
      },
      {
        ...shinyNode,
      },
    ],
  };

  const thejusNode = { name: 'Thejus (SE)', children: [{ name: 'Amal (E)' }] };

  const firozNode = {
    name: 'Firoz (SE)',
    children: [
      {
        ...thejusNode,
      },
    ],
  };

  const visakhNode = {
    name: 'Visakh (SE)',
    children: [{ name: 'Akisha (SE)' }],
  };

  const arunRajNode = {
    name: 'ArunRaj (PE)',
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
    name: 'Lekshmi (A)',
    children: [
      {
        ...supriyaNode,
      },
      { ...arunRajNode },
    ],
  };
  const akashNode = {
    name: 'Akash (SE)',
    children: [{ name: 'Gayathri (E)' }],
  };

  const karthikNode = {
    name: 'Karthik Kannan (SE)',
    children: [
      {
        ...akashNode,
      },
    ],
  };

  const arjunSurendranNode = {
    name: 'Arjun S (SE)',
    children: [{ name: 'Nijin (E)' }],
  };

  const deepakNode = {
    name: 'Deepak (SE)',
    children: [
      {
        ...arjunSurendranNode,
      },
      { name: 'Sraven (SE)' },
    ],
  };

  const nanduNode = {
    name: 'Nandu (APE)',
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
    name: 'Ajesh (SE)',
    children: [
      {
        name: 'Nithin Prakash (E)',
      },
    ],
  };

  const ushaNode = {
    name: 'Usha (SE)',
    children: [
      {
        ...ajeshNode,
      },
    ],
  };

  const arjunAravindNode = {
    name: 'Arjun Aravind (SE)',
    children: [{ name: 'Abhishek' }],
  };

  const ajithNode = {
    name: 'Ajith (SE)',
    children: [{ name: 'Sera (E)' }],
  };

  const vvnNode = {
    name: 'VVN (SE)',
    children: [{ ...arjunAravindNode }, { ...ajithNode }],
  };

  const jkNode = {
    name: 'JK (APE)',
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
    name: 'Vijay (A)',
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
    name: 'Geethu (SE)',
    children: [{ name: 'Ashwin (E)' }],
  };

  const saranyaNode = {
    name: 'Saranya (SE)',
    children: [{ name: 'Akshay (E)' }],
  };

  const vipinNode = {
    name: 'Vipin (LE)',
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
    name: 'Anil (PE)',
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
    name: 'Parvathy (SE)',
    children: [{ name: 'Ajukrishnan (E)' }],
  };

  const michaelNode = {
    name: 'Michael (SE)',
    children: [{ name: 'Aromal (E)' }],
  };

  const akhilNode = {
    name: 'Akhil (LE)',
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
    name: 'Anjana (LE)',
    children: [{ name: 'Arun Sankar (SE)' }],
  };

  const georgeNode = {
    name: 'George (SE)',
    children: [{ name: 'Rachel (E)' }],
  };

  const faizalNode = {
    name: 'Faizal (LE)',
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
    name: 'Tessy (AA)',
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
    name: 'Vishnu (LE)',
    children: [
      {
        name: 'Suraj (SE)',
      },
      {
        name: 'Nithin Peter (SE)',
      },
    ],
  };

  const pratheeshNode = {
    name: 'Pratheesh (LE)',
    children: [
      {
        name: 'Abhijith (E)',
      },
    ],
  };

  const bibhuNode = {
    name: 'Bibhu (LE)',
    children: [
      {
        ...vishnuNode,
      },
      { ...pratheeshNode },
    ],
  };

  const shalabhaNode = {
    name: 'Shalabha (LE)',
    children: [
      {
        name: 'Sam (SE)',
      },
      {
        name: 'Sanal (E)',
      },
    ],
  };

  const nishadNode = {
    name: 'Nishad (SE)',
    children: [
      {
        name: 'Tom (SE)',
      },
    ],
  };

  const sabirNode = {
    name: 'Sabir (LE)',
    children: [
      {
        ...shalabhaNode,
      },
      { ...nishadNode },
    ],
  };

  const dineshNode = {
    name: 'Dinesh (LE)',
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
    name: 'Nishin (SA)',
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
  const orgChart = { ...nishinNode };
  return (
    <>
      <header style={{ textAlign: 'center' }}>
        <h1>FEED Tree - React</h1>
      </header>{' '}
      <div id="treeWrapper" style={{ width: '99vw', height: '100vh' }}>
        <Tree
          data={orgChart}
          orientation="vertical"
          nodeSize={{ x: 90, y: 140 }}
        />
      </div>
    </>
  );
};

export default FeedTree;
