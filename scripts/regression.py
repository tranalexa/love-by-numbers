import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import StandardScaler

STEPS = 1000
RATE = 0.0001 

# Load and preprocess data
filtered_data = pd.read_stata("HCMST 2017 to 2022 small public version 2.2.dta")
filtered_data = filtered_data.rename(columns={
    'w1_q24_church': 'meeting_venue_church',
    'w1_age_when_met': 'age_when_met',
    'w1_max_relation_status': 'highest_status'
})

filtered_data['meeting_venue_church'] = filtered_data['meeting_venue_church'].apply(lambda x: 1 if x == 'yes' else 0)
filtered_data['highest_status'] = filtered_data['highest_status'].apply(lambda x: 1 if x == 'married' else 0)

# Normalize features
scaler = StandardScaler()
filtered_data[['age_when_met']] = scaler.fit_transform(filtered_data[['age_when_met']])

filtered_data = filtered_data.dropna(subset=['meeting_venue_church', 'age_when_met', 'highest_status'])
print(filtered_data.shape[0])

# Sigmoid function (stabilized)
def sigmoid(x):
    x = np.clip(x, -500, 500)  # Clip to avoid overflow
    return 1 / (1 + np.exp(-x))

# Train the logistic regression model
def train():
    x_train = np.c_[np.ones(filtered_data.shape[0]), filtered_data[['meeting_venue_church', 'age_when_met']].values]  # Include intercept term (x0)
    y_train = filtered_data['highest_status'].values  # Target variable
    num_examples, num_param = x_train.shape  # Shape of the data
    params = np.zeros(num_param)  # Initialize parameters

    # Gradient Descent
    for _ in range(STEPS):
        gradients = np.zeros(num_param)

        # For each training example
        for i in range(num_examples):
            x_i = np.array(x_train[i]) 
            y_i = y_train[i] 
            current_prediction = sigmoid(np.dot(x_i, params))  # Current model prediction

            # Calculate gradients for each parameter
            for j in range(num_param):
                gradients[j] += (y_i - current_prediction) * x_i[j]

        # Update parameters
        for j in range(num_param):
            params[j] += RATE * gradients[j]

    return params

# Test the logistic regression model
def test(params):
    # Test data (using the same filtered data here for simplicity)
    x_test = filtered_data[['meeting_venue_church', 'age_when_met']].values
    y_test = filtered_data['highest_status'].values
    x_test = np.c_[np.ones(x_test.shape[0]), x_test]  # Add intercept term

    # Predict probabilities using the trained model
    probabilities = sigmoid(np.dot(x_test, params))
    predicted_labels = []

    # Convert probabilities to binary classification (0 or 1)
    for prob in probabilities:
        if prob >= 0.5:
            predicted_labels.append(1)
        else:
            predicted_labels.append(0)

    predicted_labels = np.array(predicted_labels)

    # Output the predictions and actual labels
    print("Predictions:", predicted_labels)
    print("Actual Labels:", y_test)
    accuracy = accuracy_score(y_test, predicted_labels)
    print("Accuracy:", accuracy)

# Run the logistic regression
params = train()
test(params)

# Coefficients interpretation
print(f"Model coefficients (params): {params}")
print(f"Interpretation:")
print(f"β1 (Effect of meeting at church): {params[1]}")
print(f"β2 (Effect of age when met): {params[2]}")
