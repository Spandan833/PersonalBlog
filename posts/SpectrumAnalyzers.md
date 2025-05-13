---
title: "Spectrum Analyzers"
date: "2025-08-02"
author: "Spandan Sen Choudhury"
excerpt: "Spectrum analyzer is a device which ..."
image: "/images/SpectrumAnalyzer.webp"
tags: "RF Engineering"
---

A spectrum is a device which is used to measure the magnitude of different frequency components of the signal over a specific range. The analyzer breaks down the signal into its component frequencies, allowing engineers an insight into the nature of the signal. They are widely used in electronics, telecommunications and RF testing to analyze the frequency content of signals, identifying interference or troubleshoot systems.

The output of a spectrum analyzer is a X-Y graph where the horizontal axis is linearly calibrated in frequency and the vertical axis represnts the power of the signal, generally expressed in dBm.

## Swept tuned spectrum analyzer

Swept-tuned spectrum analyzers operate by "scanning" through a range of frequency. The input signal passes through an attenuator  which reduces the power level of the incoming signal before it reaches subsequent sensitive stages. This is done to prevent overload,  gain compression and generation of distortion products within the analyzer itself. The attenuation is generally set automatically but some analyzers also offer manual selection. A capacitor is present which blocks DC signals from damaging the analyzer. This unfortunately also blocks low frequency components resulting in an increase in the minimum usable start frequency of the analyzer

###

A Low Pass filter prevents high frequency components from reaching the mixer.

The analyzer has a local oscillator (LO) which can generate a range of frequencies which is then fed into a mixer along with the input signal. The mixer produces multiple frequencies, one of which is the difference between the LO frequency and the input signal. This signal is passed through a narrowband IF Filter with a center at the IF Frequency, which is fixed and known. This filter only selects the frequency component of the input which upon mixing with the LO siganl produces a difference equal to the IF filter.

###

So we can say the input signal frequency $$F_{\text{Input}} = | F_{\text{LO}} - F_{\text{IF}} |$$

### Resolving signals 

As per Fourier, a sinusoid should have energy at only a single frequency. However this is not the case in real world as every response in the spectrum analyzer has a certain width associated with it. The mixing of LO frequency with the input signal produces the sum, difference and the two original signals.
Since the LO is swept over a frequency range, the mixing product are also swept. As the mixing product sweeps over the IF range the shape of the window is traced on the display.

The bandwidth of this filter can be adjusted by the user of the analyzer and is called the *Resolution Bandwidth* of the sweep. A low resoultion bandwidth enables the Spectrum Analyzer to resolve closely separated frequency components but increases the time taken to complete the frequency sweep.

### Envelope detector

A detector is used to measure the amplitude of the signal passing through the filter. As the LO sweeps the frequency range specified by the user, commonly called span, all the frequency components in that range are detected.



### FFT Spectrum Analyzer

FFT Spectrum analyzers use a high speed ADC to sample the signal at a high rate, producing a block of discrete time-domain samples. The sampling rate should be such that it statisfies the nyquist criterion i.e. the sampling rate should be greater than twice the highest frequency present in the signal. Then a specialized chip performs Fast Fourier Transform and converts the time domain data into frequency domain. 

FFT spectrum analyzers offer faster performance compared to other spectrum analyzers. But they are mostly suited for analyzing periodic signals.


