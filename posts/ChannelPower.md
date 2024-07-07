---
title: "Channel Power in RF"
date: "2020-01-02"
---

## Channel Power

#### Spandan Sen Choudhury

**What is Channel Power?**

Firstly what is a channel? The channel is a portion of the spectrum (Power vs Frequency plot) and can be defined by

    1. Start & Stop Frequency
    2. Center Frequency and Span

For a single tone signal all the power is located at a single frequency. The power of such a signal is the power at that frequency. But for spread spectrum signals, power is distributed across a range of frequencies (which may define a channel). The measurement has to take into account the sum of power for every frequency component within the designated bandwidth.

The sum of all power in the channel is called channel power. Channel power is usually measured in dBm or Watts.

**How is Channel Power measured?**

Channel Power can is almost always measued with a Spectrum Analyzer which converts time domain data into the frequency domain. The measurement is done by integrating over the entire bandwidth and that is why this method is sometimes called as integrated bandwidth method.

The user also can optionally give the Resolution Bandwidth to be used for the measurement.
