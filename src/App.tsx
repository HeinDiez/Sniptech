import React, { useState, useEffect } from 'react';
import Search from './component/search';
import IssuesList from './component/list/issue';
import Filter from './component/filter';


import './App.css';


interface Issue {
  id: number;
  title: string;
  state: string;
  created_at: string;
  updated_at: string;
  comments: number;
}


function App() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [filteredIssues, setFilteredIssues] = useState<Issue[]>(issues);

  useEffect(() => {
    setFilteredIssues(issues);
  }, [issues]);

  const handleFilterChange = (state: string) => {
    if (state === 'all') {
      setFilteredIssues(issues);
    } else {
      setFilteredIssues(issues.filter((issue) => issue.state === state));
    }
  };

  return (
    <div className="App">
      <Search setData={setIssues}/>
      <Filter onFilterChange={handleFilterChange} />
      <div>
        <IssuesList issues={filteredIssues}/>
      </div>
    </div>
  );
}

export default App;
