// Form Handlers for Form Data Brand
// Extracted from main component for reusability and maintainability

export const handleSocialMediaChange = (formData, setFormData, platform, value) => {
  setFormData(prev => ({
    ...prev,
    socialMedia: {
      ...prev.socialMedia,
      [platform]: value
    }
  }));
};

export const handleVisionMissionChange = (formData, setFormData, type, index, field, value) => {
  setFormData(prev => {
    const updatedArray = [...prev[type]];
    updatedArray[index] = {
      ...updatedArray[index],
      [field]: value
    };
    return {
      ...prev,
      [type]: updatedArray
    };
  });
};

export const addVisionMissionItem = (formData, setFormData, type) => {
  setFormData(prev => ({
    ...prev,
    [type]: [...prev[type], { title: '', description: '' }]
  }));
};

export const removeVisionMissionItem = (formData, setFormData, type, index) => {
  setFormData(prev => ({
    ...prev,
    [type]: prev[type].filter((_, i) => i !== index)
  }));
};

export const handleCertificationChange = (formData, setFormData, index, value) => {
  setFormData(prev => {
    const updatedCertifications = [...prev.certifications];
    updatedCertifications[index] = value;
    return {
      ...prev,
      certifications: updatedCertifications
    };
  });
};

export const addCertification = (formData, setFormData) => {
  setFormData(prev => ({
    ...prev,
    certifications: [...prev.certifications, '']
  }));
};

export const removeCertification = (formData, setFormData, index) => {
  setFormData(prev => ({
    ...prev,
    certifications: prev.certifications.filter((_, i) => i !== index)
  }));
};

export const handleFeedbackChange = (formData, setFormData, index, field, value) => {
  setFormData(prev => {
    const updatedFeedback = [...prev.customerFeedback];
    updatedFeedback[index] = {
      ...updatedFeedback[index],
      [field]: value
    };
    return {
      ...prev,
      customerFeedback: updatedFeedback
    };
  });
};

export const addFeedback = (formData, setFormData) => {
  setFormData(prev => ({
    ...prev,
    customerFeedback: [...prev.customerFeedback, { customer: '', feedback: '' }]
  }));
};

export const removeFeedback = (formData, setFormData, index) => {
  setFormData(prev => ({
    ...prev,
    customerFeedback: prev.customerFeedback.filter((_, i) => i !== index)
  }));
};

export const handleCompetitorChange = (formData, setFormData, index, field, value) => {
  setFormData(prev => {
    const updatedCompetitors = [...prev.competitors];
    updatedCompetitors[index] = {
      ...updatedCompetitors[index],
      [field]: value
    };
    return {
      ...prev,
      competitors: updatedCompetitors
    };
  });
};

export const addCompetitor = (formData, setFormData) => {
  setFormData(prev => ({
    ...prev,
    competitors: [...prev.competitors, { name: '', strength: '', weakness: '' }]
  }));
};

export const removeCompetitor = (formData, setFormData, index) => {
  setFormData(prev => ({
    ...prev,
    competitors: prev.competitors.filter((_, i) => i !== index)
  }));
};

export const handleProblemsSolutionsChange = (formData, setFormData, index, field, value) => {
  setFormData(prev => {
    const updatedProblemsSolutions = [...prev.problemsSolutions];
    updatedProblemsSolutions[index] = {
      ...updatedProblemsSolutions[index],
      [field]: value
    };
    return {
      ...prev,
      problemsSolutions: updatedProblemsSolutions
    };
  });
};

export const addProblemsSolutions = (formData, setFormData) => {
  setFormData(prev => ({
    ...prev,
    problemsSolutions: [...prev.problemsSolutions, { problem: '', solution: '' }]
  }));
};

export const removeProblemsSolutions = (formData, setFormData, index) => {
  setFormData(prev => ({
    ...prev,
    problemsSolutions: prev.problemsSolutions.filter((_, i) => i !== index)
  }));
};

// Generic change handler for simple form inputs
export const handleInputChange = (formData, setFormData, field, value) => {
  setFormData(prev => ({
    ...prev,
    [field]: value
  }));
};

// Handler for nested object changes
export const handleNestedChange = (formData, setFormData, parentField, childField, value) => {
  setFormData(prev => ({
    ...prev,
    [parentField]: {
      ...prev[parentField],
      [childField]: value
    }
  }));
};
