#### Content

- [Detecting Model Misspecification in Amortized SBI](#sbi-model-misspecification)

----

#### Detecting Model Misspecification in Amortized Simulation-Based Inference with Neural Networks{#sbi-model-misspecification}

[arXiv Preprint](https://arxiv.org/abs/2112.08866) | [Code](https://github.com/marvinschmitt/ModelMisspecificationBF)<br>
Recent advances in probabilistic deep learning enable amortized Bayesian inference in settings where the likelihood function is implicitly defined by a simulation program. But how faithful is such inference when simulations represent reality somewhat inaccurately? In this paper, we conceptualize the types of model misspecification arising in simulation-based inference and systematically investigate the performance of SNPE-C (APT) and the BayesFlow framework under these misspecifications. We propose an augmented optimization objective which imposes a probabilistic structure on the learned latent data summary space and utilize maximum mean discrepancy (MMD) to detect potentially catastrophic misspecifications during inference undermining the validity of the obtained results. We verify our detection criterion on a number of artificial and realistic misspecifications, ranging from toy conjugate models to complex models of decision making and disease outbreak dynamics applied to real data. Further, we show that posterior inference errors increase when the distance between the latent summary distributions of the true data-generating process and the training simulations grows. Thus, we demonstrate the dual utility of MMD as a method for detecting model misspecification and as a proxy for verifying the faithfulness of amortized simulation-based Bayesian inference.
