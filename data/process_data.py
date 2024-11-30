import pandas as pd
import numpy as np
import json
import os

# Read the Stata file
df = pd.read_stata("HCMST 2017 to 2022 small public version 2.2.dta")

# Process original age distribution
hist_data, bin_edges = np.histogram(df['w1_age_when_met'].dropna(), bins=30)
bin_centers = (bin_edges[:-1] + bin_edges[1:]) / 2
age_distribution = [{"age": float(age), "frequency": int(freq)} 
                   for age, freq in zip(bin_centers, hist_data)]

# Process CLT distribution
sample_means = []
num_samples = 1000
sample_size = 50

for _ in range(num_samples):
    sample = df['w1_age_when_met'].dropna().sample(sample_size)
    sample_means.append(sample.mean())

hist_means, bin_edges_means = np.histogram(sample_means, bins=30)
bin_centers_means = (bin_edges_means[:-1] + bin_edges_means[1:]) / 2
clt_distribution = [{"mean": float(mean), "frequency": int(freq)} 
                    for mean, freq in zip(bin_centers_means, hist_means)]

# Save to JSON in the src directory
output_path = "../src/processed_data.json"
with open(output_path, 'w') as f:
    json.dump({
        "ageDistribution": age_distribution,
        "cltDistribution": clt_distribution
    }, f, indent=2)

print(f"Data processing complete. Check {output_path} for results.")
