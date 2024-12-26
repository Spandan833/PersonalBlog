---
title: "Understanding S-parameters"
date: "2024-11-11"
excerpt: "S-parameters or Scattering parameters are used for.."
image: "/images/NetAn.webp"
tags: "RF Engineering"
---

## S Parameters

S-parameters or Scattering parameters are used for describing the behavior of a multi-port network, which is also referred to as a Device Under Test (DUT).
They describe the effect a signal passing through the network. In this article, I will focus on S parameters for a two port networks.

For 2 port network there 4 parameters S11, S12, S22 and S21. All these parameters are complex numbers expressed as a combination of a magnitude and an angle.
A Vector Network Analyzer (VNA) is used to measure S-parameters. These parameters are used to define the characteristics of the Device Under Test.

The DUT may be an Amplifier, Downconverter, Upconverter etc.

Below I will discuss each parameter in detail:

### S11

S11 is a measure of how well the input impedance of the network matches the characteristic impedance of the system. It is the part of the signal that is
reflected back to the input port of the signal (the port to which the signal is transmitted). A signal is sent to port 1 and port 2 is terminated with a
Z0 load. This is done to ensure any signal reaching port 2 is absorbed and not reflected back. It can be expressed in dB as return loss. Return Loss is calculated
as -20log(|S11|).

### S21

S21 is a measure of the portion of the signal that is transmitted to the output power when output port is terminated with a matched impedance. It is the
portion of the signal that is transmitted to the output port when a input signal is given at input port.

### S22
