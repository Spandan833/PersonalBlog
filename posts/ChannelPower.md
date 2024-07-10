---
title: "Basics of Channel Power measurement using Spectrum Analyzers"
date: "2020-01-02"
---

## Learnings from measureing Channel Power

#### Spandan Sen Choudhury

**What is Channel Power?**

Firstly what is a channel? The channel is a region in the frequency spectrum and can be defined by

    1. Start & Stop Frequency
    2. Center Frequency and Span

For a single tone signal all the power is located at a single frequency. The power of such a signal is the power at that frequency. So if you are using a Soft Front Panel, you can put a marker at the position where you want to measure the power and the marker gives the power at that location. But for spread spectrum signals, power is distributed across a continuous range of frequencies. The measurement has to take into account the sum of power for every frequency component within the designated bandwidth. This is accomplished by integrating the power over the range of frequency and hence this method is called Integrated Bandwidth (IBW)method.

> The sum of all power in the channel is called channel power.

Channel power is usually measured in dBm or Watts.

**How is Channel Power measured?**

Channel Power can is almost always measued with a Spectrum Analyzer which converts time domain data into the frequency domain. A spectrum analyzer is a device that measures and displays power of a signal (strength) as it varies by frequency within its frequency range (spectrum). The frequency appears on the horizontal (X) axis, and the amplitude is displayed on the vertical (Y) axis.

## Resolution Bandwidth

Resolution Bandwidth or RBW determines the width of the frequency "bin" that the analyzer uses to measure the power. In other words, it is the bandwidth of the filter applied to the input signal before it is measured. A narrow RBW results can provide more accurate measurement at the cost of higher sweep time for the measureement. For closely spaced signals, a wider RBW could result in the analyzer being unable to distinguish between the two signals. As a result, the signals can overlap, causing interference and inaccurate power measurements. The most efficient RBW depends on the signal and must be determined by experimentation.

## Reference Level

This is a value (in a unit which matches the power unit), which determines the upper limit of the power expected from the measurement. If the reference level is set too high or too low the signal will not be visible properly on the analyzer display.

## Why is it measured?

Channel Power is used to validate the performance of RF components such as Transmitters, Antenna, Filters etc.
Many regulatory bodies, such as the Federal Communications Commission (FCC) in the United States, require that RF devices and systems comply with specific power emission limits to prevent interference with other wireless services. So the manufacturer/designer has to make sure their device emits power in the range and within limits which complies with the regulations.
