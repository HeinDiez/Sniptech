import React, { useState } from 'react';

import fetchIssues from '../../service/fetchIssues';

import Input from '../input'

type Props = {
  setData: (value: any)=> void;
}

const Search = ({ setData }: Props) => {
  const [organization, setOrganization] = useState('');
  const [repository, setRepository] = useState('');


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const issues = await fetchIssues(organization, repository);
      setData(issues);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Organization" value={organization} onChange={setOrganization} />
      <Input label="Repository" value={repository} onChange={setRepository} />
      <button type="submit">Fetch Issues</button>
    </form>
  );
};

export default Search;