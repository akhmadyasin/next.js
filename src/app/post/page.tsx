import React from 'react'

type Props = { params: Promise<{id:string[]}> }

const page = async(props: Props) => {
    const id = (await props.params).id;
  return 
    <div>Post dengan id[id]</div>;
};

export default page;