---
title: "IVI Drivers"
date: "2020-01-01"
excerpt: "IVI drivers is an instrument driver standard that provides common .."
---

## Introduction:

**Interchangeable Virtual Instrument (IVI) Driver** is a common interface which allow for instrument interchangeability. Interchangeability leads to more robust incorporation of new measurement devices into existing systems.

The IVI drivers provide a standard well defined structure for interfacing with an instrument that uses VXI Plug n Play standards. Each IVI driver presents a set of high level functions for controlling an instrument.

For example, for all IVI drivers implementing the SpecAn interface, the method
`configureStartStop` will be used to set the start and stop frequency for the measurement regardless of the instrument vendor.

SpecAn is one of the fourteen instrument classes defined by IVI. IVI driver come in 3 flavors: IVI COM, IVI NET, IVI C

IVI drivers simplify, standardize testing and make it reusable.

**What do IVI drivers offer?**

IVI drivers offer a number of capabilities like State Caching, Range Checks, Multithreading, automatic status query. The fundamental goal of IVI drivers is to allow ease of test by allowing test engineers to interchange their hardware without changing their test source code.
To achieve this goal, instrument drivers must have a standard programming interface. Other IVI Foundation specifications define standard functions and attributes for common instrument types such as oscilloscopes, digital
multimeters, and function generators. For example, the oscilloscope class contains common attributes for configuring an oscilloscope, such as vertical range and trigger type. The class specification also defines functions for high-level configuration and data retrieval, such as Configure Channel and Read Waveform.
