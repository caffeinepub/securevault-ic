import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { useState } from "react";

const orgTypes = [
  "Enterprise",
  "Government Agency",
  "Financial Institution",
  "Legal Firm",
  "Healthcare Organization",
  "Data Protection Agency",
  "Other",
];

interface FormState {
  orgName: string;
  contactName: string;
  email: string;
  orgType: string;
  message: string;
}

const initialForm: FormState = {
  orgName: "",
  contactName: "",
  email: "",
  orgType: "",
  message: "",
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const { actor } = useActor();
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.orgName || !form.contactName || !form.email || !form.orgType) {
      setErrorMsg("Please fill in all required fields.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      if (!actor) {
        throw new Error("Backend not ready. Please try again.");
      }
      await actor.submitAccessRequest(
        form.orgName,
        form.contactName,
        form.email,
        form.orgType,
        form.message,
      );
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      console.error("Submit error:", err);
      setErrorMsg(
        "Something went wrong. Please try again or contact us directly.",
      );
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="section-divider mb-0" />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 60%, oklch(0.55 0.22 264 / 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 max-w-3xl pt-24">
        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold mb-3">
            Request Access
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Secure Your{" "}
            <span className="gradient-text-blue">Organization's Data</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Fill out the form below and our team will reach out within 24 hours
            to discuss your organization's specific requirements.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-10 animate-on-scroll">
          {/* Success state */}
          {status === "success" && (
            <div
              data-ocid="contact.success_state"
              className="flex flex-col items-center text-center py-10"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-5">
                <CheckCircle2 size={30} className="text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Request Received
              </h3>
              <p className="text-muted-foreground text-sm max-w-sm">
                Thank you for your interest in SecureVault IC. Our enterprise
                team will contact you within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm text-brand-blue hover:underline"
              >
                Submit another request
              </button>
            </div>
          )}

          {/* Form */}
          {status !== "success" && (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Error state */}
              {status === "error" && (
                <div
                  data-ocid="contact.error_state"
                  className="flex items-start gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/30 text-sm text-destructive"
                >
                  <AlertCircle size={17} className="flex-shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Row 1: org name + contact name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="orgName"
                    className="text-sm font-medium text-foreground/90"
                  >
                    Organization Name{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="orgName"
                    data-ocid="contact.org_name.input"
                    type="text"
                    placeholder="Meridian Capital Bank"
                    value={form.orgName}
                    onChange={(e) => handleChange("orgName", e.target.value)}
                    required
                    autoComplete="organization"
                    className="bg-brand-navy-light/50 border-border focus:border-primary/60 focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="contactName"
                    className="text-sm font-medium text-foreground/90"
                  >
                    Contact Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="contactName"
                    data-ocid="contact.contact_name.input"
                    type="text"
                    placeholder="James Harrington"
                    value={form.contactName}
                    onChange={(e) =>
                      handleChange("contactName", e.target.value)
                    }
                    required
                    autoComplete="name"
                    className="bg-brand-navy-light/50 border-border focus:border-primary/60 focus:ring-primary/20"
                  />
                </div>
              </div>

              {/* Row 2: email + org type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground/90"
                  >
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    data-ocid="contact.email.input"
                    type="email"
                    placeholder="james@meridian.com"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    autoComplete="email"
                    className="bg-brand-navy-light/50 border-border focus:border-primary/60 focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-foreground/90">
                    Organization Type{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={form.orgType}
                    onValueChange={(val) => handleChange("orgType", val)}
                  >
                    <SelectTrigger
                      data-ocid="contact.org_type.select"
                      className="bg-brand-navy-light/50 border-border focus:border-primary/60"
                    >
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border">
                      {orgTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground/90"
                >
                  Message{" "}
                  <span className="text-muted-foreground font-normal">
                    (Optional)
                  </span>
                </Label>
                <Textarea
                  id="message"
                  data-ocid="contact.message.textarea"
                  placeholder="Tell us about your organization's document security requirements, scale, and any compliance standards you need to meet..."
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  rows={5}
                  className="bg-brand-navy-light/50 border-border focus:border-primary/60 focus:ring-primary/20 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                data-ocid="contact.submit.button"
                disabled={status === "loading"}
                className="btn-primary-glow w-full flex items-center justify-center gap-3 py-4 rounded-lg text-base font-bold text-white disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {status === "loading" ? (
                  <>
                    <Loader2
                      size={18}
                      className="animate-spin"
                      data-ocid="contact.loading_state"
                    />
                    Submitting Request...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Request Secure Access
                  </>
                )}
              </button>

              <p className="text-xs text-muted-foreground text-center">
                Your information is encrypted and never shared with third
                parties.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
