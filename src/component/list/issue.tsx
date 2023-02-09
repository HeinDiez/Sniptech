import React from 'react';

interface Issue {
  id: number;
  title: string;
  state: string;
  created_at: string;
  updated_at: string;
  comments: number;
}

interface Props {
  issues: Issue[];
}

const IssuesList: React.FC<Props> = ({ issues }) => (
  <ul>
    {issues.map((issue) => (
      <li key={issue.id}>
        <h3>{issue.title}</h3>
        <p>State: {issue.state}</p>
        <p>Created At: {issue.created_at}</p>
        <p>Updated At: {issue.updated_at}</p>
        <p>Comments: {issue.comments}</p>
      </li>
    ))}
  </ul>
);

export default IssuesList;