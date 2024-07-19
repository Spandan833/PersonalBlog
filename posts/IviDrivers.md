---
title: "IVI Drivers"
date: "2020-01-01"
excerpt: "IVI drivers is an instrument driver standard that provides common .."
---

## Introduction:

**Interchangeable Virtual Instrument (IVI) Driver** is a common interface which allow for instrument interchangeability. Interchangeability leads to more robust incorporation of new measurement devices into existing systems.

The IVI drivers provide a standard well defined structure for interfacing with an instrument that uses VXI Plug n Play standards. Each IVI driver presents a set of high level functions for controlling an instrument.

For example, for all IVI drivers implementing the SpecAn interface, the method `configureStartStop` will be used to set the start and stop frequency for the measurement regardless of the instrument vendor.

SpecAn is one of the fourteen instrument classes defined by IVI. IVI driver come in 3 flavors: IVI COM, IVI NET and IVI C

IVI drivers simplify, standardize testing and make it reusable.

## What do IVI drivers offer?

IVI drivers offer a number of capabilities like State Caching, Range Checks, Multithreading, automatic status query. The fundamental goal of IVI drivers is to allow ease of test by allowing test engineers to interchange their hardware without changing their test source code.
To achieve this goal, instrument drivers must have a standard programming interface. Other IVI Foundation specifications define standard functions and attributes for common instrument types such as oscilloscopes, digital multimeters, and function generators. For example, the oscilloscope class contains common attributes for configuring an oscilloscope, such as vertical range and trigger type. The class specification also defines functions for high-level configuration and data retrieval, such as Configure Channel and Read Waveform.

## A practical example of how IVI reduces testing complexity

If a company does Environmental Testing, they must use Thermal Chambers. Now, the company may have bought thermal chambers from different vendors because one vendor does not provide all the specifications.
But although the functionalities of both the Thermal Chambers are similar, they have different ways in which to communicate with the instrument. For example, one might be using SCPI command and the other might have register based communication. So the company asks some engineers to develop drivers for the 2 thermal chambers which will implement a common interface. Then the Test Engineers who actually write the test now don't need to know how internally communication occurs with the instrument. They can write a common set of tests using the interface and thus achieving test standardisation.
