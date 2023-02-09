import axios from 'axios';

const fetchIssues = async (organization: string, repository: string) => {
  try {
    const response = await axios.get(`https://api.github.com/repos/${organization}/${repository}/issues`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchIssues;